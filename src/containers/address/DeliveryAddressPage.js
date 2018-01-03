import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button, Icon, List, NavBar, Toast,ListView  } from 'antd-mobile';
import { connect } from 'react-redux';
import styles from './address.css';

const Item = List.Item;
const Brief = Item.Brief;

const list = [
  {
    "addressId": 1285,
    "receiveName": "刘家惠",
    "receivePhone": "13758241239",
    "receiveAddress": "纳爱斯大楼1101",
    "receiveProvince": "山西省",
    "receiveCity": "阳泉市",
    "receiveDistrict": "平定县",
    "updateTime": 1511345989000,
    "expressType": 1,
    "expressDate": "01",
    "postcode": "310052",
    "addressType": 1
  },
  {
    "addressId": 1044,
    "receiveName": "陈磊",
    "receivePhone": "13616532010",
    "receiveAddress": "测试地址",
    "receiveProvince": "浙江省",
    "receiveCity": "杭州市",
    "receiveDistrict": "市辖区",
    "updateTime": 1495785958000,
    "expressType": null,
    "expressDate": null,
    "postcode": null,
    "addressType": 2
  },
  {
    "addressId": 1044,
    "receiveName": "陈磊",
    "receivePhone": "13616532010",
    "receiveAddress": "测试地址",
    "receiveProvince": "浙江省",
    "receiveCity": "杭州市",
    "receiveDistrict": "市辖区",
    "updateTime": 1495785958000,
    "expressType": null,
    "expressDate": null,
    "postcode": null,
    "addressType": 2
  },
  {
    "addressId": 1044,
    "receiveName": "陈磊",
    "receivePhone": "13616532010",
    "receiveAddress": "测试地址",
    "receiveProvince": "浙江省",
    "receiveCity": "杭州市",
    "receiveDistrict": "市辖区",
    "updateTime": 1495785958000,
    "expressType": null,
    "expressDate": null,
    "postcode": null,
    "addressType": 2
  },
  {
    "addressId": 1044,
    "receiveName": "陈磊",
    "receivePhone": "13616532010",
    "receiveAddress": "测试地址",
    "receiveProvince": "浙江省",
    "receiveCity": "杭州市",
    "receiveDistrict": "市辖区",
    "updateTime": 1495785958000,
    "expressType": null,
    "expressDate": null,
    "postcode": null,
    "addressType": 2
  },
  {
    "addressId": 1044,
    "receiveName": "陈磊",
    "receivePhone": "13616532010",
    "receiveAddress": "测试地址",
    "receiveProvince": "浙江省",
    "receiveCity": "杭州市",
    "receiveDistrict": "市辖区",
    "updateTime": 1495785958000,
    "expressType": null,
    "expressDate": null,
    "postcode": null,
    "addressType": 2
  },
  {
    "addressId": 1044,
    "receiveName": "陈磊333",
    "receivePhone": "13616532010",
    "receiveAddress": "测试地址",
    "receiveProvince": "浙江省",
    "receiveCity": "杭州市",
    "receiveDistrict": "市辖区",
    "updateTime": 1495785958000,
    "expressType": null,
    "expressDate": null,
    "postcode": null,
    "addressType": 2
  },{
    "addressId": 1044,
    "receiveName": "陈磊222",
    "receivePhone": "13616532010",
    "receiveAddress": "测试地址",
    "receiveProvince": "浙江省",
    "receiveCity": "杭州市",
    "receiveDistrict": "市辖区",
    "updateTime": 1495785958000,
    "expressType": null,
    "expressDate": null,
    "postcode": null,
    "addressType": 2
  },
];

class Address extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func
  }

  onItemClick(item) {
    const { onClick } = this.props;
    onClick && onClick(item);
  }

  render() {
    const { item } = this.props
    return (
      <Item
        extra={<img src="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" alt=''></img>}
        multipleLine
        onClick={() => this.onItemClick(item)}>
        {`${item.receiveName}  ${item.receivePhone}`}
        <Brief style={{ fontSize: 12, color: "#a0a4a8" }}>
          {`${item.receiveProvince}${item.receiveCity}${item.receiveDistrict}${item.receiveAddress}`}
        </Brief>
      </Item>
    )
  }
}

class DeliveryAddressPage extends Component {

  onSubmit = () => {
    Toast.info('确定', 1);
  }

  onAddAddress = () => {
    Toast.info('新增', 1);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            rightContent={
              <div style={{ marginRight: '16px' }} onClick={this.onSubmit}>确定</div>
            }
          >配送地址</NavBar>

          <List className={styles.address_list}>
            {list.map((item, index) =>
              <Address key={index} item={item} onClick={(item) => { Toast.info(item.receiveName, 1) }} />)}
          </List>

          <Button className={styles.add_button} onClick={this.onAddAddress}>新增配送地址</Button>
        </div>
      </div>
    );
  }
}

const select = store => ({
  status: store.login.status,
})

export default connect(select)(DeliveryAddressPage);