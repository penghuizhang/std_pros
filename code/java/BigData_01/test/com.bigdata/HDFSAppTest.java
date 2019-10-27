package com.bigdata;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FSDataInputStream;
import org.apache.hadoop.fs.FSDataOutputStream;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IOUtils;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.io.IOException;
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
        fileSystem.copyFromLocalFile(new Path("C:\\Users\\kylin\\Desktop\\sh"), new Path("/hadooptest"));
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
        FSDataOutputStream fsDataOutputStream = fileSystem.create(new Path("/hadooptest/hello.text"));
        fsDataOutputStream.writeUTF("hello world");
        fsDataOutputStream.flush();
        fsDataOutputStream.close();
    }

}
