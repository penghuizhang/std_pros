package hdfs;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.*;
import org.junit.Before;

import java.io.*;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Map;
import java.util.Set;

/**
 * 实现词频统计功能
 *
 * 1. 通过HDFS API 将文件读入
 * 2. 将文件中的数据进行拆分 统计 （自定义mapper）
 * 3. 将统计到的数据存放到上下文中， (自定义context)
 * 4. 输出结果到HDFS 文件中
 */
public class HDFSApp {
    public static void main(String[] args) throws Exception {

        // 1. 通过HDFS API 将文件读入 拿到文件
        Path path = new Path("/hadoopapi/test/word.txt");

        FileSystem fileSystem = FileSystem.get(new URI("hdfs://192.168.0.6:8020"), new Configuration(), "root");
        IContext context = new IContext();
        IMapper mapper = new IMapperImpl();
        // 拿到文件
        RemoteIterator<LocatedFileStatus> locatedFileStatusRemoteIterator = fileSystem.listFiles(path, false);
        while (locatedFileStatusRemoteIterator.hasNext())
        {
            LocatedFileStatus fileStatus = locatedFileStatusRemoteIterator.next();
            FSDataInputStream fsDataInputStream = fileSystem.open(fileStatus.getPath());
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(fsDataInputStream));

            String line = "";
            while ((line = bufferedReader.readLine()) != null)
            {
                // 2. 将文件中的数据进行拆分 统计 （自定义mapper）
                mapper.map(line,context);
            }
            bufferedReader.close();
            fsDataInputStream.close();
        }
        // 3. 将统计到的数据存放到上下文中， (自定义context)
        // TODO: 2019/10/27   将统计的结果放到缓存中


        // 输出结果文件
        // 调用HDFS API
        Path outPath = new Path("/hadoopapi/output/wc.txt");
        FSDataOutputStream fsDataOutputStream = fileSystem.create(outPath);



        // TODO: 2019/10/27 将统计的结果输出出来
        Map<Object, Object> cacheMap = context.getCacheMap();
        Set<Map.Entry<Object, Object>> entries = cacheMap.entrySet();
        for (Map.Entry<Object, Object> entry : entries)
        {
            fsDataOutputStream.write((entry.getKey().toString()+" \t "+ entry.getValue()+" \t\n ").getBytes());
        }

        fsDataOutputStream.close();
        fileSystem.close();
        System.out.println("success");
    }
}
