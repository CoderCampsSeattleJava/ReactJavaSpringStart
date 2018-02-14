import React, { Component } from 'react';

class Youtube extends Component {
    render() {
        return (
            <div style={{fontSize:'large', color:'green'}}>
                <div clasName='Videos' style={{ backgroundColor: '#0F86AC'}}>Coder Dudes - Featured Videos</div>
                Coder's School of the Month
            <iframe width="560" height="315" src="https://www.youtube.com/embed/V4w5R7_80G0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            
                A day at Coder Camp
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bb6Gqa_hXV8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
        );
    }
}

export default Youtube;

