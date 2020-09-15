function updateMap() {

    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {

                latitude = element.coordinates[1];
                longitude = element.coordinates[0];
                cases = element.cases;
                console.log(latitude);
                console.log(longitude);


                if (cases < 250) {
                    color = "rgb(0, 230, 115)";
                } else if (cases > 250 && cases < 1000) {
                    color = "rgb(102, 153, 255)";
                } else if (cases > 1000 && cases < 3000) {
                    color = "rgb(255, 0, 0)";
                } else {
                    color = `rgb(${cases%10},${cases%100},${cases%1000})`;
                }

                // mark on the map
                new mapboxgl.Marker({
                        draggable: true,
                        color: color
                    })
                    .setLngLat([longitude, latitude])
                    .addTo(map);


                // const marker = new mapboxgl.Marker()
                //     .setLngLat([longitude, latitude])
                //     .setPopup(new mapboxgl.Popup().setText(cases))
                //     .addTo(map);



                // var marker = new mapboxgl.Marker()
                //     .setLngLat([longitude, latitude])
                //     .addTo(map);













            })
        })

}


updateMap()
