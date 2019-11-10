package com.bigdata.mr.access;

import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Partitioner;

/**
 * Description: BigData_01
 * Created by kylin on 2019/11/10 9:58
 */
public class AccessPartitioner extends Partitioner<Text, Access> {

    /**
     *
     * @param phone
     * @param access
     * @param numberPartitioner 分区个数
     * @return
     */
    @Override
    public int getPartition(Text phone, Access access, int numberPartitioner) {

        if (phone.toString().startsWith("13"))
        {
            return 0;
        }
        else if (phone.toString().startsWith("15"))
        {
            return 1;
        }
        else
        {
            return 2;
        }

    }
}
