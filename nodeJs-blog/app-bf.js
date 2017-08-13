/**����Ĵ������Լ�ѧϰ���ģ���Ϊÿ�д��붼�н���
 * Created by faye on 2017/6/27.
 * Ӧ�ó������������ڣ��ļ�
 */

//    ����expressģ��
var  express=require('express');
//����ģ�崦��ģ��
var swig=require('swig');
//����appӦ��  => NodeJs Http.createServer();
var app=express();

//���þ�̬�ļ��й�
//���û����ʵ�url��/public��ʼ����ôֱ�ӷ��ض�Ӧ__dirname+'/public'�µ��ļ�
app.use('/public',express.static(__dirname+'/public'));



//����Ӧ��ģ��
//���嵱ǰӦ����ʹ�õ�ģ������
//��һ��������ģ����������ƣ�ͬʱҲ��ģ���ļ��ĺ�׺,�ڶ���������ʾ���ڽ�������ģ�����ݵķ���
app.engine('html',swig.renderFile);
//����ģ���ļ���ŵ�Ŀ¼����һ������������views���ڶ���������Ŀ¼
app.set('views','./views');
//ע����ʹ�õ�ģ�����棻��һ������������view engine���ڶ���������app.engine��������ж����ģ����������ƣ���һ����������һ�µ�
app.set('view engine','html');
//�ڿ��������У���Ҫȡ��ģ�建��
swig.setDefaults({cache:false});
/*
* ��ҳ
*
*   req request����
*   res response����
*   next ����
*
* */
app.get('/',function(req,res,next){
    //res.send('<p>8988</p>');
    /*
     * ��ȡviewsĿ¼�µ�ָ���ļ������������ظ��ͻ���
     * ��һ����������ʾģ����ļ��������viewsĿ¼ views/index1.html
     *�ڶ������������ݸ�ģ��ʹ�õ�����
     * */
    res.render('index')
});
/*��ʵ�֣�̫�鷳
app.get('/main.css',function(req,res,next){
    res.setHeader('content-type','text/css');
    res.send("body {background:red;}");
});*/


//����http����
app.listen(8081);


/*
* 1.�û�����http����->url->����·��->�ҵ�ƥ��Ĺ��� ->ִ��ָ���İ󶨺��������ض�Ӧ�������û�
*
* 2. /public -> ��̬ ->ֱ�Ӷ�ȡָ��Ŀ¼�µ��ļ������ظ��û� ->��̬ ->����ҵ���߼�������ģ�壬����ģ��-> �������ݸ��û�
*
* */