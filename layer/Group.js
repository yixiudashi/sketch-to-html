const util = require('../util');

class GroupLayer {
    constructor (){
        this.layer = {};
        this.parentLayer = {};
        this.selector = '';
        this.imagePath = '';
    }
    getStyle (){
        let otherStyl;
        let frameStyle = {
            position: 'absolute',
            left: util.pxvalue(this.layer.frame.x),
            top: util.pxvalue(this.layer.frame.y),
            width: util.pxvalue(this.layer.frame.width),
            height: util.pxvalue(this.layer.frame.height),
            'transform': this.layer.style.transform ? this.layer.style.transform.join(' ') : null,
            'box-shadow': this.layer.style.boxShadow,
            'background-color': this.layer.style.backgroundColor,
            'background-image': this.layer.style.backgroundImage ? `url(${path.join(imagePath, layer.style.backgroundImage)}.png)` : null,
            'background': this.layer.style.linearGradientString,
            'border-width': util.pxvalue(this.layer.style.borderWidth),
            'border-style': this.layer.style.borderStyle,
            'border-color': this.layer.style.borderColor,
            'opacity': this.layer.style.opacity
        };
        return Object.assign({}, frameStyle);
    }
    getHtml (childString) {
        let layer = this.layer;
        return `<div id="${layer.id}" class="${layer.name}" style="${util.getStyleString(layer.finalStyle)}" >${childString}</div>`;
    }
}

module.exports = GroupLayer;