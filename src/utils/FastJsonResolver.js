function isObject (v) {
  return v != null && typeof v === 'object'
}

function RefResolver (o) {
  if (!isObject(o)) {
    throw new Error('Only object or array can be resolved')
  }
  this.root = o
}
RefResolver.prototype.resolve = function () {
  var root = this.root

  function safeEval (expression) {
    var v = root
    var refs = expression.split(/[.[\]]+/)
    for (let ref of refs) {
      if (ref != null && ref !== '') {
        v = v[ref]
      }
    }
    if (v != null && v['$ref']) {
      v = safeEval(v.$ref)
    }
    return v
  }

  function process (o, context, key) {
    for (let p in o) {
      if (o.hasOwnProperty(p)) {
        let v = o[p]
        if (isObject(v)) {
          process(v, o, p)
        } else {
          if (p === '$ref') {
            v = (v.substring(1))
            var v2 = safeEval(v)
            context[key] = v2
          }
        }
      }
    }
  }
  try {
    if (JSON.stringify(root).indexOf('$ref') !== -1) {
      process(root)
    }
  } catch (e) {
    console.error(e)
  }
  return root
}

export const FastJsonResolver = RefResolver
