const baseUrl = 'http://ec2-3-14-80-191.us-east-2.compute.amazonaws.com';

export default {
    contentIdeias: (keyword) => { return baseUrl + `/content_ideas/${keyword}`; },
}