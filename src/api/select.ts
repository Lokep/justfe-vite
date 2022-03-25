import { ref } from 'vue';
import { request } from '@/utils/request';
import { IRequestOption } from '@/types';

export const useManageSelectList = (data: any, option: IRequestOption = {}) => {
  const list = ref([]);
  const loading = ref(false);

  const getManageSelectList = async (data: any, option: IRequestOption) => {
    loading.value = true;
    const res = await request({ ...data }, option);
    loading.value = false;

    if (res.res === 0) {
      list.value = res.data;
    }

    return res.data;
  };

  getManageSelectList(data, option);

  return {
    list,
    loading,
    getManageSelectList,
  };
};
