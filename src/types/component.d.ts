/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'

// src/types/components.d.ts
import XtxSwiper from './XtxSwiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
  }
}

declare module 'vue' {
  export interface GlobalComponents {
    // uni-ui 组件类型声明 - 使用 @uni-helper/uni-ui-types 提供的类型
    UniCard: import('@uni-helper/uni-ui-types')['UniCard']
    UniSection: import('@uni-helper/uni-ui-types')['UniSection']
    UniList: import('@uni-helper/uni-ui-types')['UniList']
    UniListItem: import('@uni-helper/uni-ui-types')['UniListItem']
    UniIcons: import('@uni-helper/uni-ui-types')['UniIcons']
    UniButton: import('@uni-helper/uni-ui-types')['UniButton']
    UniInput: import('@uni-helper/uni-ui-types')['UniInput']
    UniPopup: import('@uni-helper/uni-ui-types')['UniPopup']
    UniSwipeAction: import('@uni-helper/uni-ui-types')['UniSwipeAction']
    UniSwipeActionItem: import('@uni-helper/uni-ui-types')['UniSwipeActionItem']
    UniTag: import('@uni-helper/uni-ui-types')['UniTag']
    UniRate: import('@uni-helper/uni-ui-types')['UniRate']
    UniNoticeBar: import('@uni-helper/uni-ui-types')['UniNoticeBar']
    UniNumberBox: import('@uni-helper/uni-ui-types')['UniNumberBox']
    UniPagination: import('@uni-helper/uni-ui-types')['UniPagination']
    UniSteps: import('@uni-helper/uni-ui-types')['UniSteps']
    UniTable: import('@uni-helper/uni-ui-types')['UniTable']
    UniTh: import('@uni-helper/uni-ui-types')['UniTh']
    UniTr: import('@uni-helper/uni-ui-types')['UniTr']
    UniTd: import('@uni-helper/uni-ui-types')['UniTd']
    UniCalendar: import('@uni-helper/uni-ui-types')['UniCalendar']
    UniDatetimePicker: import('@uni-helper/uni-ui-types')['UniDatetimePicker']
    UniDrawer: import('@uni-helper/uni-ui-types')['UniDrawer']
    UniEasyinput: import('@uni-helper/uni-ui-types')['UniEasyinput']
    UniFab: import('@uni-helper/uni-ui-types')['UniFab']
    UniForms: import('@uni-helper/uni-ui-types')['UniForms']
    UniFormsItem: import('@uni-helper/uni-ui-types')['UniFormsItem']
    UniGrid: import('@uni-helper/uni-ui-types')['UniGrid']
    UniGridItem: import('@uni-helper/uni-ui-types')['UniGridItem']
    UniGroup: import('@uni-helper/uni-ui-types')['UniGroup']
    UniIndexedList: import('@uni-helper/uni-ui-types')['UniIndexedList']
    UniLink: import('@uni-helper/uni-ui-types')['UniLink']
    UniLoadMore: import('@uni-helper/uni-ui-types')['UniLoadMore']
    UniNavBar: import('@uni-helper/uni-ui-types')['UniNavBar']
    UniSearchBar: import('@uni-helper/uni-ui-types')['UniSearchBar']
    UniSegmentedControl: import('@uni-helper/uni-ui-types')['UniSegmentedControl']
    UniTransition: import('@uni-helper/uni-ui-types')['UniTransition']
  }
}
