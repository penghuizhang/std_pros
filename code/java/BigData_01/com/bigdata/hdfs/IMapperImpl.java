package com.bigdata.hdfs;
import org.apache.commons.lang.StringUtils;

import java.util.Collections;

/**
 * Description: BigData_01
 * Created by kylin on 2019/10/27 23:33
 */
public class IMapperImpl implements IMapper {
    @Override
    public void map(String line, IContext context) {
        String[] string = line.split(" ");
        for (String s: string)
        {
            Object o = context.get(s);
            // 如果没有该词条，该词条置为1
            if (o == null)
            {
                context.write(s,1);
            }
            else
            {
                int i = Integer.parseInt(o.toString());
                context.write(s,i+1);
            }
        }
    }
}
