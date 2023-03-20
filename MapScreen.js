import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
const Map = () => {
    const [mapRegion, setmapRegion] = useState({
        latitude: 61.26,
        longitude: 73.40,
        latitudeDelta: 0.0930,
        longitudeDelta: 0.0430,
    });
    // function create_marker(lat,long) {
    //     <Marker draggable
    //             coordinate={{ latitude : lat , longitude : long}}
    //             title={"title3"}
    //             description={"description3"}
    //     />
    //
    // }
    return (

        <View style={styles.container}>
            <MapView
                style={{ alignSelf: 'stretch', height: '100%' }}
                region={mapRegion}
            >

            <Marker draggable
                    coordinate={{ latitude : 61.26 , longitude : 73.40 }}
                    title={"title"}
                    description={"description"}

            />
                <Marker draggable
                        coordinate={{ latitude : 61.30 , longitude : 73.40 }}
                        title={"title2"}
                        description={"description2"}

                />
            </MapView>
        </View>
    );
};
export default Map
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});