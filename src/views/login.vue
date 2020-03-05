<template>
    <div>
        <van-popup v-model="show" :close-on-click-overlay="false">
            <van-form v-show="!register" v-model="form" @submit="onSubmit" style="width:16rem;">
                <van-field
                        v-model="form.username"
                        label="登录名"
                        left-icon="user-circle-o"
                        required
                        placeholder=""
                        :rules="[{ required: true, message: '请填写登录名' }]"
                />
                <van-field
                        v-model="form.password"
                        type="password"
                        label="密码"
                        left-icon="eye-o"
                        required
                        placeholder=""
                        :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="display:flex;justify-content:space-around;margin: 16px;">
                    <van-button round color="linear-gradient(to right, #4bb0ff, #6149f6)" type="info" size="small"
                                native-type="submit">
                        登录
                    </van-button>
                    <van-button type="info" round plain size="small" @click="showRegister">
                        注册
                    </van-button>
                </div>
            </van-form>
        </van-popup>
        <van-dialog v-model="register" title="新用户注册" show-cancel-button>
            <van-form v-model="form2" @submit="onSubmit2">
                <van-field
                        v-model="form2.username"
                        label="登录名"
                        left-icon="user-circle-o"
                        required
                        placeholder=""
                        :rules="[{ required: true, message: '请填写登录名' }]"
                />
                <van-field
                        v-model="form2.password"
                        type="password"
                        label="密码"
                        left-icon="eye-o"
                        required
                        placeholder=""
                        :rules="[{ required: true, message: '请填写密码' }]"
                />
                <van-field
                        v-model="reviewpassword"
                        type="password"
                        label="确认密码"
                        left-icon="eye-o"
                        required
                        placeholder=""
                        :rules="[{ required: true, message: '请确认密码保持一致' }]"
                />
                <van-field
                        v-model="form2.phone"
                        label="手机号码"
                        type="tel"
                        placeholder=""
                        @click="clickSelfNum"
                />
                <van-field name="uploader" label="头像上传">
                    <template #input>
                        <van-uploader v-model="form2.uploader" />
                    </template>
                </van-field>
                <van-field
                        readonly
                        clickable
                        name="area"
                        :value="form2.area"
                        label="地区选择"
                        placeholder="点击选择省市区"
                        @click="showArea = true"
                />
                <van-field
                        readonly
                        clickable
                        name="calendar"
                        :value="form2.birthday"
                        label="出生日期"
                        placeholder="点击选择日期"
                        @click="showCalendar = true"
                />

            </van-form>
        </van-dialog>
        <van-popup v-model="showArea" position="bottom">
            <van-area
                    :area-list="areaList"
                    @confirm="onConfirmArea"
                    @cancel="showArea = false"
            />
        </van-popup>
        <van-calendar v-model="showCalendar" @confirm="onConfirmBirthday" />
        <van-number-keyboard
                style="z-index: 9999"
                :show="showSelfNum"
                theme="custom"
                extra-key="."
                close-button-text="完成"
                @blur="showSelfNum = false"
                @input="onInput"
                @delete="onDelete"
        />
    </div>

</template>
<script>
    import {Notify} from 'vant'
    import AreaList from '@/utils/area.js';
    export default {
        data() {
            return {
                showSelfNum:false,
                showCalendar:false,
                value: '',
                showArea: false,
                areaList: AreaList, // 数据格式见 Area 组件文档
                register: false,
                form: {
                    username: '',
                    password: ''
                },
                reviewpassword:'',
                form2: {
                    username: '',
                    password: '',
                    uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
                    birthday:'',
                    area:'',
                    phone:''
                },
                show: true
            }
        },
        methods: {
            /**
             * 点击登录
             * */
            onSubmit() {
                let self = this
                if (self.form.username == 'admin' && self.form.password == 'admin') {
                    self.$store.state.loginSuccess = true
                    // window.localStorage.setItem('login','true')
                    self.$router.push({path: '/'})

                } else {
                    // 危险通知
                    // Notify({ type: 'danger', message: '通知内容' });

                    // 警告通知
                    Notify({type: 'warning', message: '登录名或密码错误,请重新输入'});
                    self.$store.state.loginSuccess = false
                    // window.localStorage.setItem('login','false')
                }
            },
            /**
             * 点击注册信息确认
             * */
            onSubmit2() {
            },
            /**
             * 点击注册
             * */
            showRegister() {
                this.register = true
            },
            /**
             * 确定地区
             * */
            onConfirmArea(values) {
                this.form2.area = values.map(item => item.name).join('/');
                this.showArea = false;
            },
            /**
             * 确定生日
             * */
            onConfirmBirthday(date){
                this.form2.birthday = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
                this.showCalendar = false;
            },
            clickSelfNum(){
                this.showSelfNum = true
            },
            onInput(value) {
                this.form2.phone+=value
            },
            onDelete() {
                this.form2.phone=this.form2.phone.substring(0,this.form2.phone.length-1)
            }
        },
    }

</script>