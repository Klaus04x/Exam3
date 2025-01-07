import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Box = ({ backgroundColor, text, time, title }) => {
  return (
    <View style={[styles.box, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

const App = () => {
  const data = [
    {
      id: '1',
      title: "Bước 1: Xác định nhu cầu khách hàng",
      text: "Vũ Văn Hoàng sắp hết hạn lúc 01/08/2020 9:00",
      time: "20/08/2020, 6:00",
      backgroundColor: '#c5d5e5',
    },
    {
      id: '2',
      title: "Bạn có khách hàng mới",
      text: "Chúc mừng bạn, bạn có khách hàng mới.\nHãy mau chóng liên lạc ngay.",
      time: "20/08/2020 6:00",
      backgroundColor: '#c5d5e5',
    },
    {
      id: '3',
      title: "Khách hàng được chia sẻ bị trùng",
      text: "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.",
      time: "20/08/2020 6:00",
      backgroundColor: '#f1f8ff',
    },
    {
      id: '4',
      title: "Khách hàng được thêm bị trùng",
      text: "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.",
      time: "20/08/2020 6:00",
      backgroundColor: '#c5d5e5',
    },
    {
      id: '5',
      title: "Công việc sắp đến hạn trong hôm nay",
      text: "Bạn có 17 công việc sắp hết hạn trong hôm nay.",
      time: "20/08/2020 6:00",
      backgroundColor: '#f1f8ff',
    },
    {
      id: '6',
      title: "Công việc đã quá hạn",
      text: "Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.",
      time: "20/08/2020 6:00",
      backgroundColor: '#f1f8ff',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Box 
            backgroundColor={item.backgroundColor}
            title={item.title}
            text={item.text}
            time={item.time}
          />
        )}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#eef',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 415,
    height: 'auto',
    padding: 10
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  text: {
    marginTop: 5,
    color: 'black',
  },
  time: {
    color: 'gray',
    marginTop: 10,
  },
});

export default App;