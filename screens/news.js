import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker'
import {Text, View} from 'react-native';
import axios from 'axios'

export default class News extends React.Component{

    constructor(){
        super();
        this.state={
            allCountryInfo:"",
            countryCode: "IN",
            chosenCountryInfo: {}
        }
    }

    getCovidData = async (countryCode) => {
        let info = await axios.get("https://covid19.richdataservices.com/rds/api/query/int/jhu_country/select?cols=date_stamp,cnt_confirmed,cnt_death,cnt_recovered&where=(iso3166_1=" + countryCode + ")&format=amcharts&limit=5000");
        console.log(info.data.dataProvider[info.data.dataProvider.length -1])
        let latestData = info.data.dataProvider[info.data.dataProvider.length -1]
        console.log(latestData)
        this.setState({
            chosenCountryInfo: latestData
        })
    }

    componentDidMount(){
        this.getCovidData(this.state.countryCode);
            
    }

    render(){
        return(
            <View>
                <DropDownPicker
                    items={[
                        {label: "INDIA", value: "IN"},
                        {label: "UNITED STATES OF AMERICA", value: "US"},
                        {label: "UNITED KINGDOM", value: "GB"},
                        {label: "AUSTRALIA", value:"AU"},
                        {label: "NEW ZEALAND", value: "NZ"}
                        
                        
                    ]}

                    defaultValue={this.state.countryCode}
                    onChangeItem={(item)=>{
                        this.setState({
                            countryCode: item.value
                        })
                        this.getCovidData(item.value)
                    }}
                    
                />
            </View>
        )
    }
}