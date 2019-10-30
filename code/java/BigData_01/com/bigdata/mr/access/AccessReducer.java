package com.bigdata.mr.access;

import org.apache.hadoop.io.NullWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;

import java.io.IOException;

/**
 * Description: 自定义reducer
 * Created by kylin on 2019/11/9 12:01
 */
public class AccessReducer extends Reducer<Text, Access, NullWritable, Access> {

    /**
     * 将分发过来的数据进行合并处理
     * @param key 手机号
     * @param values <Access, Access>
     * @param context
     */
    @Override
    protected void reduce(Text key, Iterable<Access> values, Context context) throws IOException, InterruptedException {

        long ups = 0;
        long downs = 0;

        for (Access access: values)
        {
            ups += access.getUp();
            downs += access.getDown();
        }

        context.write(NullWritable.get(), new Access(key.toString(), ups, downs));
    }
}
