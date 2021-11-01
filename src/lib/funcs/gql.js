import { get } from 'svelte/store';
import { API, graphqlOperation } from "aws-amplify";
import { isSignedIn } from "$lib/components/Auth/store"

export async function queryItem(schema, vars, queryName) {
  console.log('queryItem', vars, queryName)
  try {
    if(get(isSignedIn)){
      console.log('signedInway')
      const res = await API.graphql({
        query: schema,
        variables: vars,
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      console.log('queryItemRes', res)
      return { message: 'success', data: res.data[queryName]}
    } else {
      console.log('signedoutway')
      const res = await API.graphql(graphqlOperation(schema, vars)) 
      console.log('queryItemRes2', res)
      return { message: 'success', data: res.data[queryName]}
    }
  } catch (err) {
    console.log('err', err, err.message)
    // let allErrMessages = "";
    // for (let i = 0; i < err.errors.length; i++) {
    //   allErrMessages =
    //     allErrMessages + (i > 0 ? ", " : "") + err.errors[i].message;
    // }
    return { message: 'error', data: err.message}
  }
}

export async function queryItemsPart(schema, vars,queryName, nextToken){
  try {
    if(get(isSignedIn)){
      console.log('signedInway', schema)
      const res = await API.graphql({
        query: schema,
        variables: { nt: nextToken, ...vars },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      console.log('rdddd',res)
      return { message: 'success', data: res.data[queryName]}
  } else {
    console.log('signedoutway', schema)
    const res = await API.graphql(graphqlOperation(schema, { nt: nextToken, ...vars })) 
    return { message: 'success', data: res.data[queryName]}
  }
} catch (err) {
    let allErrMessages = "";
    for (let i = 0; i < err.errors.length; i++) {
      allErrMessages =
        allErrMessages + (i > 0 ? ", " : "") + err.errors[i].message;
    }
    return { message: 'error', data: allErrMessages}
  }
}

// export async function queryItems(schema, queryName, vars){
//   var allItems = []
//   var ntok = null
//   const res = await queryItemsPart(schema, queryName, vars, ntok)
//   if(res.message === 'success'){
//     allItems = res.data.items
//     ntok = res.data.nextToken
//   } else {
//     allItems = []
//     ntok = null
//   }
//   while(typeof ntok !== typeof null){
//     const res = await queryItemsPart(schema, queryName, vars, ntok)
//       if(res.message === 'success'){
//       allItems = [...allItems, ...res.data.items ]
//       ntok = res.data.nextToken
//       } else {
//         ntok = null
//     }
//     return allItems
//   }
// }

export function generateMutateParamsAndModel(field_vals,queryKey,itemModelRes){
  let params = {}
  for(let [key,value] of Object.entries(field_vals)){
    if(value){
      params[key] = value
    }
  }
  let model_input = ''
  for(let [key,value] of Object.entries(params)){
    model_input = model_input + key + ':' + JSON.stringify(value) + ','
  }
  const model = `mutation MutateItem {
    ${queryKey} (
      input: {${model_input}}
    ) ${itemModelRes}
  }`
  return { params, model }
}