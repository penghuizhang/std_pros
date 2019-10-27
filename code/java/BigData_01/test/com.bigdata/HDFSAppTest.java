package com.bigdata;

import com.amazonaws.services.config.model.EvaluationResult;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.*;
import org.apache.hadoop.fs.permission.FsPermission;
import org.apache.hadoop.io.IOUtils;
import org.apache.hadoop.util.Progressable;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.io.*;
import java.net.URI;

/**
 * Description: BigData_01
 * Created by kylin on 2019/10/27 18:19
 */
public class HDFSAppTest {

    public static final String URI_PATH = "hdfs://192.168.0.6:8020";
    Configuration configuration = null;
    FileSystem fileSystem = null;
    @Before
    public void setUp() throws Exception
    {
        configuration = new Configuration();

        // 可以设置副本参数
        configuration.set("dfs.replication","1");
        System.out.println("--------------setUp------------------");
        fileSystem = FileSystem.get(new URI(URI_PATH), configuration, "root");
    }

    @After
    public void endDown()
    {
        Configuration configuration = null;
        FileSystem fileSystem = null;
        System.out.println("-------------endDown------------------");
    }

    /**
     * 创建一个文件夹
     * @throws IOException
     */
    @Test
    public void mkdir() throws IOException {
        fileSystem.mkdirs(new Path("/hadooptest"));
    }

    /**
     * 上传文件
     * @throws Exception
     */
    @Test
    public void putFile() throws Exception
    {
        fileSystem.copyFromLocalFile(new Path("C:\\Users\\kylin\\Desktop\\sh\\word.txt"), new Path("/hadoopapi/test"));
    }

    /**
     * 查看hadoop上面的文件
     * @throws Exception
     */
    @Test
    public void catText() throws Exception
    {
        FSDataInputStream open = fileSystem.open(new Path("/hadooptest/sh/get_remote.sh"));
        IOUtils.copyBytes(open,System.out, 1024);
    }

    @Test
    public void writeFile() throws Exception
    {
//        FSDataOutputStream fsDataOutputStream = fileSystem.create(new Path("/hadooptest/hello.text"));
        FSDataOutputStream fsDataOutputStream = fileSystem.create(new Path("/hadooptest/hello_2.text"));
        fsDataOutputStream.writeUTF("hello world  replication:1");
        fsDataOutputStream.flush();
        fsDataOutputStream.close();
    }

    /**
     * 修改文件名字
     * @throws Exception
     */
    @Test
    public void rename() throws Exception
    {
        Path oldPath = new Path("/hadooptest/hello_2.text");
        Path newPath = new Path("/hadooptest/hello_1.text");
        boolean result = fileSystem.rename(oldPath, newPath);
        System.out.println(result);
    }

    /**
     * 上传文件
     * @throws Exception
     */
    @Test
    public void copyFromLocalBigFile() throws Exception
    {
        FSDataOutputStream fsDataOutputStream = fileSystem.create(new Path("/hadooptest/jdk"), new Progressable() {
            @Override
            public void progress() {
                System.out.print("1");
            }
        });

        InputStream inputStream = new BufferedInputStream(new FileInputStream(new File("D:\\BaiduNetdiskDownload\\jdk-8u121-windows-x64.exe")));
        IOUtils.copyBytes(inputStream,fsDataOutputStream,4096);
    }

    /**
     * 将hadoop 上的文件拷贝到本地
     * @throws Exception
     */
    @Test
    public void copyToLocalFile() throws Exception
    {
        Path src = new Path("/hadooptest/jdk");
        Path dst = new Path("E:\\code\\std_pros\\code\\java\\BigData_01\\resource");
        fileSystem.copyToLocalFile(false, src, dst, true);
    }

    /**
     * 列出当前路径下的目录
     * @throws Exception
     */
    @Test
    public void listFile() throws Exception
    {
        FileStatus[] fileStatuses = fileSystem.listStatus(new Path("/hadooptest"));
        for (FileStatus file : fileStatuses)
        {
            String type = file.isDirectory() ? "文件夹" : "文件";
            long blockSize = file.getBlockSize();
            String group = file.getGroup();
            long len = file.getLen();
            String owner = file.getOwner();
            String permission = file.getPermission().toString();
            Path path = file.getPath();
            short replication = file.getReplication();

            System.out.println(type + "\t" + blockSize + "\t" + group + "\t" + len + "\t" + owner + "\t" + permission + "\t" + path + "\t" + replication);

        }
    }

    /**
     * 列出当前路径下的目录（迭代）
     * @throws Exception
     */
    @Test
    public void listFileRecurise() throws Exception
    {
        RemoteIterator<LocatedFileStatus> locatedFileStatusRemoteIterator = fileSystem.listFiles(new Path("/hadooptest"), true);
        while (locatedFileStatusRemoteIterator.hasNext())
        {
            LocatedFileStatus file = locatedFileStatusRemoteIterator.next();
            String type = file.isDirectory() ? "文件夹" : "文件";
            long blockSize = file.getBlockSize();
            String group = file.getGroup();
            long len = file.getLen();
            String owner = file.getOwner();
            String permission = file.getPermission().toString();
            Path path = file.getPath();
            short replication = file.getReplication();

            System.out.println(type + "\t" + blockSize + "\t" + group + "\t" + len + "\t" + owner + "\t" + permission + "\t" + path + "\t" + replication);
        }
    }

    /**
     * 获取到某一个文件的块相关信息
     * @throws Exception
     */
    @Test
    public void getBlockStatus() throws Exception
    {
        FileStatus fileStatus = fileSystem.getFileStatus(new Path("/hadooptest/jdk"));
        BlockLocation[] fileBlockLocations = fileSystem.getFileBlockLocations(fileStatus, 0, fileStatus.getLen());
        for (BlockLocation block: fileBlockLocations)
        {
            for (String name : block.getNames())
            {
                long length = block.getLength();
                long offset = block.getOffset();
                System.out.println(name + ":" + offset +": "+ length);
            }
        }
    }

    @Test
    public void delFile() throws Exception
    {
        boolean result = fileSystem.delete(new Path("/hadooptest/sh/java1"), true);
        System.out.println(result);
    }
}
