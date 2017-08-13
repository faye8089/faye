/**
 * Created by faye on 2017/6/27.
 * Ӧ�ó������������ڣ��ļ�
 */

//    ����expressģ��
var  express=require('express');
//����ģ�崦��ģ��
var swig=require('swig');
//�������ݿ�ģ��
var mongoose=require('mongoose');
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
*   ���ݲ�ͬ�Ĺ��ܻ���ģ��
* */
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));


//����http����
mongoose.connect();
app.listen(8081);

