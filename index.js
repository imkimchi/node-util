/**
 * @author Philip Yoonshin <wbvcos@gmail.com
 */

/** @description better version of try/catch
 *  @param {msg} Error Message you want to print
 *  @example
 *  //
 *  import _ from util
 *  _.err('Failed to Connect')
 */

export default const _ = {
    err: msg =>
        let newErr = new Error(msg) 
        return e => {
            newErr.originalError = e
            throw newErr
        }
    },
    log = console.log,
    colored: (color, msg) => console.log(chalk[color](msg)
    }
}
