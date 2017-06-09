# node-util
> Personal utility functions for Node

<img src="http://i.imgur.com/rnw6meJ.jpg" width="400"/>

# Usage

**_.log**
> Shorten console.log
```
_.log("I love lodash")
```

**_.err**
> better try-catch
```
const asyncTask = async () => {
  let user = await UserModel.find({})
    .catch(_.err('Error while sending notification'))
}
```
