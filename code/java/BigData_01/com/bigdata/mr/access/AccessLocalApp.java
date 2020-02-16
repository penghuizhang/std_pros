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

        Job job = Job.getInstance(configuration);
        job.setJarByClass(AccessLocalApp.class);

        // 设置分区规则
        job.setPartitionerClass(AccessPartitioner.class);

        // 设置reducer个数
        job.setNumReduceTasks(3);

        job.setMapperClass(AccessMapper.class);
        job.setReducerClass(AccessReducer.class);

        job.setMapOutputKeyClass(Text.class);
        job.setMapOutputValueClass(Access.class);

        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(Access.class);

        FileInputFormat.setInputPaths(job, new Path("hdfs://localhost:9000/access/input"));
        FileOutputFormat.setOutputPath(job, new Path("hdfs://localhost:9000/access/output"));

        job.waitForCompletion(true);

    }
}
