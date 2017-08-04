import React from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text
} from 'native-base';
import { StyleSheet, StatusBar, View, Image } from 'react-native';
import MenuItem from './MenuItem';
import ViewPager from 'react-native-viewpager';

export default class App extends React.Component {

    constructor() {
        super();
        this.images = [
            "http://www.wired.com/images_blogs/gamelife/2009/09/papajohns.jpg",
            "https://media.licdn.com/media/AAEAAQAAAAAAAAHXAAAAJDllZGQzODNiLTAyOTQtNGFiYi1iOGI0LTg5NWM5MzU3ODQxYg.png",
            "http://www.cokercobras.com/general/2016-17/photos/0001/Papajohns-graphic.jpg?max_width=600&max_height=600",
            "http://www.daytonainternationalspeedway.com/2013-Vanity-Pages/2010/~/media/993A79D00CD547B69C17278D1C08FFF3.ashx?w=650&h=300&as=1"
        ];
        this.count = 0;
        this.dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2
        });
        this.state = {
            expoFontLoaded: false,
            dataSource: this.dataSource.cloneWithPages(this.images)
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({expoFontLoaded: true})
    }

    _renderPage(data,pageID){
        return(
            <Image
                source={{uri: data}}
                style={{flex : 1}} />
        );
    }

    render() {
        return (
            this.state.expoFontLoaded &&
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{textAlign : 'center'}}>Papa John's Pizza</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='cart'/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={{flex:1,height: 150}}>
                        <ViewPager
                            dataSource={this.state.dataSource}
                            renderPage={this._renderPage}
                            autoPlay={true}
                        />
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop : 10}}>
                        <MenuItem menuName="PİZZALAR"/>
                        <MenuItem menuName="SALATALAR"/>
                        <MenuItem menuName="SOSLAR ve TURŞULAR"/>
                        <MenuItem icon="wine" menuName="İÇECEKLER"/>
                        <MenuItem menuName="TATLILAR"/>
                        <MenuItem icon="restaurant" menuName="BAŞLANGIÇLAR"/>
                    </View>
                </Content>
                {/*<Footer>*/}
                    {/*<FooterTab>*/}
                        {/*<Button full>*/}
                            {/*<Text>Footer</Text>*/}
                        {/*</Button>*/}
                    {/*</FooterTab>*/}
                {/*</Footer>*/}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#ebebeb'
    },
    header: {
        backgroundColor: '#016F54'
    }
});