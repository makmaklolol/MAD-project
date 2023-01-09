import * as React from 'react';


export default function Summary() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>Login Using Facebook</Text>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            }}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#232323',
    margin: 10,
  },

  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#92d36e',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 80,
    borderRadius: 10,
    width: 150,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
});