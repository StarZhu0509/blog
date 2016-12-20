# hexo-tag-xiami
> A hexo tag for xiami widget.


# Installation
```Bash
npm install hexo-tag-xiami --save
```

# Usage
## Single Player
```
{% xiami sid [width [height]] %}
```

**sid**（mandatory）: The id of the music on xiami(ex:`1772383046`).

**width**（optional）: width. Default is `257`.

**height**（optional）: height. Default is `33`.



## Multi Player
```
{% xiami sid1,sid2,..., [width [height [mainColor [backColor [autoPlay]]]]] %}
```

**sid**（mandatory）: The id group of the music on xiami(ex:`1772383046,1771901570,`).

**width**（optional）: width. Default is `235`.

**height**（optional）: height. Default is `346`.

**mainColor**（optional）: mainColor of the widget. Default is `FF8719`.

**backColor**（optional）: backColor of the widget. Default is `494949`.

**autoPlay**（optional）: `1` to set autoplay or `0` to close it. Default is `0`.


# Example
## Single Player
```
{% xiami 1772383046 %}
```

## Multi Player
```
{% xiami 1772383046,1771901570, 235 400 D90000 333333 1 %}
```
