/**
 * @author Philip Yoonshin <wbvcos@gmail.com
 */

/** @description better version of try/catch
 *  @param {msg} Error Message you want to print
 *  @example
 *  //
 *  import _ from util
 *  _.error('Failed to Connect')
 */

const _ = {
    err() {
        let newErr = new Error(msg) 
        return e => {
            newErr.originalError = e
            throw newErr
        }
    },
    log = console.log
}

export default _
