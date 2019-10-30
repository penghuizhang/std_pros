package com.bigdata.mr.access;

import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;

import java.io.IOException;

/**
 * Description: 将读入的文本进行分行读取统计 自定义mapper 处理类
 * Created by kylin on 2019/11/9 11:58
 */
public class AccessMapper extends Mapper<LongWritable, Text, Text, Access> {

    @Override
    protected void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
        String[] words = value.toString().split("\t");

        String phone = words[1];
        long up = Long.parseLong(words[words.length-3]);
        long down = Long.parseLong(words[words.length-2]);

        context.write(new Text(phone), new Access(phone, up, down));


    }
}
