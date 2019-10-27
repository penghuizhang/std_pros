import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Hdfs;
import org.apache.hadoop.fs.Path;
import org.junit.Before;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

/**
 * Description: BigData_01
 * Created by kylin on 2019/10/24 20:25
 */
public class HDFSApp {
    public static void main(String[] args) throws Exception {
        Configuration configuration = new Configuration();
        Path path = new Path("/hadoopapi/test");
        FileSystem fileSystem = FileSystem.get(new URI("hdfs://192.168.0.6:8020"), configuration, "root");
        boolean result = fileSystem.mkdirs(path);
        System.out.println(result);
    }
}
