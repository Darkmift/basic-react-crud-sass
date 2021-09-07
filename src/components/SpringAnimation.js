import React from 'react'
import { Transition, animated } from "react-spring";

function SpringAnimation(props) {

  return (
    <Transition
      items={props.children}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      delay={200}
      config={config.molasses}
      onRest={() => this.setState({ items: [] })}>
      {({ opacity }, item) => (
        <animated.div
          style={{
            opacity: opacity.to(item.op),
            transform: opacity
              .to(item.trans)
              .to(y => `translate3d(0,${y}px,0)`),
          }}>
          {item}
        </animated.div>
      )}
    </Transition>
  )
}

export default SpringAnimation
