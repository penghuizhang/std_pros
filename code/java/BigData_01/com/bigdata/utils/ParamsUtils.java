package com.bigdata.utils;

import java.io.IOException;
import java.util.Properties;

/**
 * Description: 读取属性的配置文件
 * Created by kylin on 2019/11/9 11:30
 */
public class ParamsUtils {

    private static Properties properties = new Properties();

    static
    {
        try {
            properties.load(ParamsUtils.class.getClassLoader().getResourceAsStream("wc.properties"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static Properties getProperties()
    {
        return properties;
    }

    public static void main(String[] args) {
        System.out.println(getProperties().getProperty("IMAPPER_CLASS"));
    }
}
