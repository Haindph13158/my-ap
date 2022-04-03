import React from 'react';
import {FlatList, RefreshControl, ScrollView} from 'react-native';
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const VirtualizedScrollView = props => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <ScrollView
      style={{position: 'absolute', top: 100}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      keyboardShouldPersistTaps="always">
      <FlatList
        {...props}
        data={[]}
        keyExtractor={(e, i) => 'dom' + i.toString()}
        ListEmptyComponent={null}
        renderItem={null}
        ListHeaderComponent={() => <>{props.children}</>}
      />
    </ScrollView>
  );
};

export default VirtualizedScrollView;
