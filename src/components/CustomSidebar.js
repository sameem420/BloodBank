const CustomSidebar = (props) => {
    const { state, descriptors, navigation } = props;
    let lastGroupName = '';
    let newGroup = true;
   
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          {state.routes.map((route) => {
            const {
              drawerLabel,
              activeTintColor,
              groupName
            } = descriptors[route.key].options;
            if (lastGroupName !== groupName) {
              newGroup = true;
              lastGroupName = groupName;
            } else newGroup = false;
            return (
              <>
                {newGroup ? (
                  <View style={styles.sectionView}>
                    <Text key={groupName} style={{ marginLeft: 10 }}>
                      {groupName}
                    </Text>
                    <View style={styles.separatorLine} />
                  </View>
                ) : null}
                <DrawerItem
                  key={route.key}
                  label={
                    ({ color }) =>
                      <Text style={{ color }}>
                        {drawerLabel}
                      </Text>
                  }
                  focused={
                    state.routes.findIndex(
                      (e) => e.name === route.name
                    ) === state.index
                  }
                  activeTintColor={activeTintColor}
                  onPress={() => navigation.navigate(route.name)}
                />
              </>
            );
          })}
        </DrawerContentScrollView>
      </SafeAreaView>
    );
  };