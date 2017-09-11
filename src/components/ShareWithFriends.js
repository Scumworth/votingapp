//ShareWithFriends.js
import React, { Component } from 'react';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

const { FacebookShareButton } = ShareButtons;
const { FacebookShareCount } = ShareCounts;
const FacebookIcon = generateShareIcon('facebook');
const title = 'Facebook';
const baseUrl = 'localhost:3000/polls/';

export default class ShareWithFriends extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <FacebookShareButton url = { baseUrl + this.props.data['_id'] } quote = {title} >
                <FacebookIcon size = {32} round />
            </FacebookShareButton>
                <FacebookShareCount url = { baseUrl + this.props.key } />
            </div>
        );
    }
}
