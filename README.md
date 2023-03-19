# flexiblay

```js
npm i flexiblay -S
```

#### 全局引入

```js
import { createApp } from "vue";
import flexiblay from "flexiblay";
import "flexiblay/dist/style.css";

createApp(App).use(flexiblay);
```

#### Container

```javascript
// components
<lay-flex></lay-flex>
// props
const props = defineProps({
    inline: { type: Boolean, default: false }, //true:display:inline-flex
    span: { type: [Number, String], default: null }, // flex-grow 的值
    stretch: { type: Boolean, default: false }, // 宽高不受内容影响
    column: { type: Boolean, default: false }, //  flex-direction:column
    wrap: { type: Boolean, default: false }, // flex-wrap:wrap
    // 对齐
    justify: String, // justify-content
    align: String, // align-items
    alignContent: String, // align-content
    alignSelf: String, // align-self
  
    autoSpan: { type: Boolean, default: false } // 父lay-flex设置true，直接子lay-flex均分
  });
```



#### layout - 栅格布局

```javascript
// components
<lay-row></lay-row>
// props
const props = defineProps({
  gutter: { type: Number, default: null }, // 间距
  justify: String, // justify-content
  align: String, // align-items
  alignContent: String // align-content
});

// components
<lay-col></lay-col>
// props
const props = defineProps({
  span: { type: [Number, String], default: null }, // 份数
  xs: { type: [Number, String], default: null }, >1920
  sm: { type: [Number, String], default: null }, >1200
  md: { type: [Number, String], default: null },>992
  lg: { type: [Number, String], default: null }, >768
  xl: { type: [Number, String], default: null }, <768

  offset: { type: [Number, String], default: null },
  pull: { type: [Number, String], default: null },
  push: { type: [Number, String], default: null },
  order: { type: [Number, String], default: null },

  align: String // align-self
});
```

这些类名为：

- `hidden-xs-only` - 当视口在 `xs` 尺寸时隐藏

- `hidden-sm-only` - 当视口在 `sm` 尺寸时隐藏

- `hidden-sm-and-down` - 当视口在 `sm` 及以下尺寸时隐藏

- `hidden-sm-and-up` - 当视口在 `sm` 及以上尺寸时隐藏

- `hidden-md-only` - 当视口在 `md` 尺寸时隐藏

- `hidden-md-and-down` - 当视口在 `md` 及以下尺寸时隐藏

- `hidden-md-and-up` - 当视口在 `md` 及以上尺寸时隐藏

- `hidden-lg-only` - 当视口在 `lg` 尺寸时隐藏

- `hidden-lg-and-down` - 当视口在 `lg` 及以下尺寸时隐藏

- `hidden-lg-and-up` - 当视口在 `lg` 及以上尺寸时隐藏

- `hidden-xl-only` - 当视口在 `xl` 尺寸时隐藏

  

#### Example

```vue
<lay-row>
    <lay-col
    xl="3"
    lg="4"
    md="6"
    sm="8"
    xs="12"
    v-for="item in 8"
    :key="item"
    >
        <div class="grid-content">{{ item + 1 }}</div>
    </lay-col>
</lay-row>

<lay-flex class="container" column auto-span>
      <header style="line-height: 60px">header</header>
      <lay-flex auto-span>
        <aside>aside</aside>
        <lay-flex column auto-span>
          <lay-flex>container</lay-flex>
          <footer>footer</footer>
        </lay-flex>
      </lay-flex>
    </lay-flex>
```







## [Example Homepage ](https://breezeiii.github.io/flexiblay/#/)

