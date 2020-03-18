import axios from '../../plugins/axios.js'
import * as types from '../types.js'


const state = {
    home: [],
}

const mutations = {
    [types.HOME]: (state, payload) => state.home = payload,
}

const actions = {
    [types.HOME]: ({commit, state}, payload) => {
        axios({
            url:'data/choose.json',
        }).then(
            res => commit('HOME', res.data[0])
        )
    }

}

export default {
    namespaced: true,//命名空间的模块，模块内部直接调用，外部需要命名空间（见组件）
    state, mutations, actions
}