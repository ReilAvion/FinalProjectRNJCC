// import React, { Component } from 'react'
// import { View, Text } from 'react-native'
// import { FlatList } from 'react-native-gesture-handler'
// import { Item } from 'react-native-paper/lib/typescript/components/List/List'

// import { HistoryRef } from './firebase/firebaseConfig'

// function Item({ id, name, amount, navigation }) {
//   return (
//     <View>
//       <Text style={styles.itemName}>{name}</Text>
//       <Text style={styles.itemAmount}>{amount}</Text>
//       <TouchableOpacity onPress={() => {}} style={styles.itemButton}>
//         <FontAwesome5
//           style={{ color: 'red', textAlign: 'right' }}
//           name="trash"
//           size={18}
//         />
//       </TouchableOpacity>
//     </View>
//   )
// }

// ;<View style={styles.centerAlign}>
//   <FlatList
//     data={this.state.History}
//     renderItem={({ item }) => (
//       <Item
//         id={item.id}
//         name={item.name}
//         amount={item.amount}
//         navigation={this.props.navigation}
//       />
//     )}
//   />
// </View>

// export default class TestDatabase extends Component {
//   state = {
//     History: [],
//   }
// }

// readHistoryRef = () => {
//   let history = []
//   HistoryRef.where('id', '>', 0).onSnapshot((querySnapShot) => {
//     querySnapShot.forEach((doc) => {
//       history.push(doc.data())
//     })

//     this.setState({ History: history })
//   })
// }
