package hdfs;

import java.util.HashMap;
import java.util.Map;

/**
 * 自定义的上下文处理器，将操作后的结果存储起来
 */
public class IContext {
    private Map<Object, Object> cacheMap = new HashMap<>();

    public Map<Object, Object> getCacheMap() {
        return cacheMap;
    }
    /**
     *  获取到map
     * @param key
     * @return
     */
    public Object get(Object key) {
        return cacheMap.get(key);
    }

    /**
     * 将数据进行缓存
     * @param key
     * @param value
     */
    public void write(Object key, Object value) {
        cacheMap.put(key,value);
    }
}
