//ShareWithFriends.js
import React, { Component } from 'react';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

const { FacebookShareButton } = ShareButtons;
const { FacebookShareCount } = ShareCounts;
const FacebookIcon = generateShareIcon('facebook');
const title = 'Facebook';
const baseUrl = 'https://powerful-stream-48801.herokuapp.com/polls/';

export default class ShareWithFriends extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <FacebookShareButton url = { baseUrl + this.props.id } quote = {title} >
                <FacebookIcon size = {32} round />
            </FacebookShareButton>
                <FacebookShareCount url = { baseUrl + this.props.id } />
            </div>
        );
    }
}
