package com.bigdata.mr.access;


import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;

/**
 * Description: app
 * Created by kylin on 2019/11/9 12:15
 */
public class AccessLocalApp {

    // Driver 端代码相同
    public static void main(String[] args) throws Exception {

        Configuration configuration = new Configuration();
        configuration.set("fs.defaultFS","hdfs://localhost:9000/");
        configuration.set("fs.default.name","hdfs://localhost:9000/");

        System.setProperty("hadoop.home.dir","D:\\BaiduNetdiskDownload\\hadoop\\hadoop-2.6.0-cdh5.15.1\\hadoop-2.6.0-cdh5.15.1");
        configuration.set("mapreduce.job.jar", "E:\\code\\std_pros\\code\\java\\BigData_01\\target\\hadoop-train-v2-1.0.jar");
        configuration.set("mapreduce.app-submission.cross-platform","true");
        //快捷配置(一步到位)：引入HADOOP配置资源:属性名相同则替换:注意域名和IP配置问题
        configuration.addResource(new Path("core-site.xml"));
        configuration.addResource(new Path("hdfs-site.xml"));

        Job job = Job.getInstance(configuration);
        job.setJarByClass(AccessLocalApp.class);

        job.setMapperClass(AccessMapper.class);
        job.setReducerClass(AccessReducer.class);

        job.setMapOutputKeyClass(Text.class);
        job.setMapOutputValueClass(Access.class);

        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(Access.class);

        FileInputFormat.setInputPaths(job, new Path("/user/hadoop/access/input"));
        FileOutputFormat.setOutputPath(job, new Path("/user/hadoop/access/output"));

        job.waitForCompletion(true);

    }
}
