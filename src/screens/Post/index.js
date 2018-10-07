import React from 'react';
import './index.css';
import moment from 'moment';
import FbEmoji from 'react-facebook-emoji';
import FbImageGrid from 'react-fb-image-grid';
import ImgI from '../../Assets/Images/1.jpg';
import ImgII from '../../Assets/Images/2.jpg';
import ImgIII from '../../Assets/Images/3.jpg';
import ImgIV from '../../Assets/Images/4.jpg';
import ImgV from '../../Assets/Images/5.jpg';
import ImgVI from '../../Assets/Images/6.jpg';
import ImgVII from '../../Assets/Images/7.jpg';

class Post extends React.Component {
    constructor() {
        super();
        this.state = {
            react: false,
            images: [
                ImgI,
                ImgII,
                ImgIII,
                ImgIV,
                ImgV,
                ImgVI,
                ImgVII
            ]
        }
    }

    toggleReact = () => {
        this.setState({
            react: true
        })
    }

    render() {
        const {
            images,
            react
        } = this.state;

        const {
            user,
            post
        } = this.props.Post;

        return (
            <div className='post'>
                <div className='info'>
                    <div>
                        <img alt='User' src={ImgI} />
                        <b style={{ color: '#548dff' }}>{user}</b>
                        <br />
                        <span style={{ color: 'grey' }}>
                            {moment().startOf(new Date().toLocaleTimeString()).fromNow()}
                        </span>
                    </div>
                    <br /><hr />
                    <div className='post'>
                        <p>{post}</p>
                    </div>
                </div>
                <FbImageGrid images={images} width={35} />
                {
                    !react
                    ?
                    <span>Nabeel and 39 others react</span>
                    :
                    <span>You, Nabeel and 39 others react</span>
                }
                <div>
                    <span onClick={ this.toggleReact }><FbEmoji type='like' size='xs' /></span>
                    <span onClick={ this.toggleReact }><FbEmoji type='love' size='xs' /></span>
                    <span onClick={ this.toggleReact }><FbEmoji type='wow' size='xs' /></span>
                    <span onClick={ this.toggleReact }><FbEmoji type='angry' size='xs' /></span>
                    <span onClick={ this.toggleReact }><FbEmoji type='haha' size='xs' /></span>
                </div>
            </div>
        );
    }
}

export default Post;