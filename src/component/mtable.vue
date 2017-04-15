<template>
    <div class="mtable">
      <Row>
        <Col span="6" offset="1">
          <Button-group style="margin-top: 10px">
            <Button type="primary" icon="plus">增加</Button>
            <Button type="error" icon="close">删除</Button>
            <Button type="primary" icon="edit">修改</Button>
            <Button type="primary" icon="search">搜索</Button>
          </Button-group>
        </Col>
        <Col span="6" offset="10">
          <Button-group style="margin-top: 10px">
            <Button type="primary" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> 原始数据</Button>
            <Button type="primary" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> 排序过滤的数据</Button>
            <Button type="primary" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> 自定义数据</Button>
          </Button-group>
        </Col>
      </Row>
      <Row>
        <Col span="22" offset="1">
          <Table width="" height="300" border :columns="columns2" :data="data4"></Table>
        </Col>
      </Row>
      <Row>
        <Col span="6" offset="1">
          <Checkbox-group style="margin-top: 10px;" v-model="tableColumnsChecked" @on-change="changeTableColumns">
            <Checkbox label="name">姓名</Checkbox>
            <Checkbox label="age">年龄</Checkbox>
            <Checkbox label="province">省</Checkbox>
            <Checkbox label="city">市</Checkbox>
            <Checkbox label="address">地址</Checkbox>
            <Checkbox label="zip">邮编</Checkbox>
            <Checkbox label="action">操作</Checkbox>
          </Checkbox-group>
          
        </Col>
        <Col span="6" offset="10">
          <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="100" :current="1" @on-change="changePage"></Page>
            </div>
          </div>
        </Col>
      </Row>
    </div>
</template>
<script>
  export default {
    name: 'mtable',
    data () {
      return {
        tableColumnsChecked: ['name', 'age', 'province', 'city', 'address', 'zip', 'action'],
        columns2: [
          {
            type: 'selection',
            width: 40,
            align: 'center',
            fixed: 'left'
          },
          {
            title: '序号',
            type: 'index',
            fixed: 'left',
            width: 80,
            align: 'center'
          },
          {
            title: '姓名',
            key: 'name',
            fixed: 'left',
            width: 100,
            sortable: true
          },
          {
            title: '年龄',
            key: 'age',
            width: 100,
            filters: [
              {
                label: '大于20岁',
                value: 1
              },
              {
                label: '小于20岁',
                value: 2
              }
            ],
            filterMultiple: false,
            filterMethod (value, row) {
              if (value === 1) {
                return row.age > 20
              } else if (value === 2) {
                return row.age < 20
              }
            }
          },
          {
            title: '省份',
            key: 'province',
            width: 100,
            sortable: true
          },
          {
            title: '市区',
            key: 'city',
            width: 100
          },
          {
            title: '地址',
            key: 'address',
            width: 200
          },
          {
            title: '邮编',
            key: 'zip',
            width: 100
          },
          {
            title: '操作',
            key: 'action',
            fixed: 'right',
            width: 120,
            render (row, column, index) {
              return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`
            }
          }
        ],
        data4: [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居',
            province: '北京市',
            city: '朝阳区',
            zip: 100000
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗',
            province: '北京市',
            city: '海淀区',
            zip: 100000
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道',
            province: '上海市',
            city: '浦东新区',
            zip: 100000
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道',
            province: '广东',
            city: '南山区',
            zip: 100000
          },
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居',
            province: '北京市',
            city: '朝阳区',
            zip: 100000
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗',
            province: '北京市',
            city: '海淀区',
            zip: 100000
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道',
            province: '上海市',
            city: '浦东新区',
            zip: 100000
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道',
            province: '广东',
            city: '南山区',
            zip: 100000
          }
        ]
      }
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: '用户信息',
          content: `姓名：${this.data4[index].name}<br>年龄：${this.data4[index].age}<br>省份：${this.data4[index].province}<br>市区：${this.data4[index].city}
          <br>地址：${this.data4[index].address}<br>邮编：${this.data4[index].zip}`
        })
      },
      remove (index) {
        this.data4.splice(index, 1)
      },
      exportData (type) {
        if (type === 1) {
          this.$refs.table.exportCsv({
            filename: '原始数据'
          })
        } else if (type === 2) {
          this.$refs.table.exportCsv({
            filename: '排序和过滤后的数据',
            original: false
          })
        } else if (type === 3) {
          this.$refs.table.exportCsv({
            filename: '自定义数据',
            columns: this.columns2.filter((col, index) => index < 4),
            data: this.data4.filter((data, index) => index < 4)
          })
        }
      },
      changePage () {
        // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
        this.data4 = this.mockTableData1()
      }
    }
  }
</script>
