package hdfs;

/**
 * Description: BigData_01
 * Created by kylin on 2019/10/27 23:30
 */
public interface IMapper {


    /**
     *  将处理后的文件进行缓存保存数据
     * @param line
     * @param context
     */
    public void map(String line, IContext context);
}
