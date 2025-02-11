/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */

import { type Slots, computed, defineComponent, normalizeClass } from 'vue'

import { isString } from 'lodash-es'

import { type EmptyConfig, useGlobalConfig } from '@idux/components/config'
import { IxIcon } from '@idux/components/icon'

import { EmptyDefaultImage, EmptySimpleImage } from './Images'
import { type EmptyProps, emptyProps } from './types'

export default defineComponent({
  name: 'IxEmpty',
  props: emptyProps,
  setup(props, { slots }) {
    const common = useGlobalConfig('common')
    const locale = useGlobalConfig('locale')
    const mergedPrefixCls = computed(() => `${common.prefixCls}-empty`)
    const config = useGlobalConfig('empty')
    const mergedDescription = computed(() => props.description ?? locale.empty.description)

    const classes = computed(() => {
      const prefixCls = mergedPrefixCls.value
      return normalizeClass({
        [prefixCls]: true,
        [`${prefixCls}-simple`]: props.simple,
      })
    })

    return () => {
      const prefixCls = mergedPrefixCls.value
      const descriptionNode = slots.description ? slots.description() : mergedDescription.value
      return (
        <div class={classes.value}>
          <div class={`${prefixCls}-image`}>{renderImage(props, slots, config)}</div>
          {descriptionNode && <div class={`${prefixCls}-description`}>{descriptionNode}</div>}
          {slots.default && <div class={`${prefixCls}-content`}>{slots.default()}</div>}
        </div>
      )
    }
  },
})

function renderImage(props: EmptyProps, slots: Slots, config: EmptyConfig) {
  if (slots.image) {
    return slots.image(props)
  }
  const image = props.image ?? config.image
  if (image) {
    if (isString(image)) {
      return <img src={image} alt="empty image" />
    }
    return image
  }

  const icon = props.icon ?? config.icon
  if (icon) {
    return isString(icon) ? <IxIcon name={icon} /> : icon
  }

  return props.simple ? <EmptySimpleImage /> : <EmptyDefaultImage />
}
