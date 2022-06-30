precision mediump float;

varying vec2 vUv;

uniform float time;
uniform vec2 resolution;
uniform int c_11;
uniform int c_12;
uniform int c_13;
uniform int c_14;
uniform int c_15;
uniform int c_21;
uniform int c_22;
uniform int c_23;
uniform int c_24;
uniform int c_25;
uniform int c_31;
uniform int c_32;
uniform int c_33;
uniform int c_34;
uniform int c_35;
uniform int c_41;
uniform int c_42;
uniform int c_43;
uniform int c_44;
uniform int c_45;
uniform int c_51;
uniform int c_52;
uniform int c_53;
uniform int c_54;
uniform int c_55;
uniform int c_61;
uniform int c_62;
uniform int c_63;
uniform int c_64;
uniform int c_65;
uniform int c_71;
uniform int c_72;
uniform int c_73;
uniform int c_74;
uniform int c_75;

bool inRect(vec2 position, vec2 offset, float size) {
  vec2 q = (position - offset) / size;
  if (abs(q.x) < 1.0 && abs(q.y) < 1.1) {
      return true;
  }
  return false;
}

/*
float rectshape(vec2 position, vec2 scale){
  scale = vec2(0.5) - scale * 0.5;
  vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y));
  shaper *= vec2(step(scale.x, 1.0 - position.x), step(scale.y, 1.0 - position.y));
  return shaper.x * shaper.y;
}
*/

void main() {
  vec3 destColor = vec3(1.0, 1.0, 1.0);
  //vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
  //vec2 p = vUv - 0.5;
  vec2 p = vec2( vUv.x * (resolution.x / resolution.y), vUv.y);


  //float gray = length(p);

  vec3 offColor = vec3(0.8, 0.8, 0.8);
  vec3 onColor = vec3(0.2, 0.2, 0.2);

  if (inRect(p, vec2(0.058, 0.936), 0.058)) {
    if (c_11 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.196, 0.936), 0.058)) {
    if (c_12 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.334, 0.936), 0.058)) {
    if (c_13 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.472, 0.936), 0.058)) {
    if (c_14 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.608, 0.936), 0.058)) {
    if (c_15 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  //2
  if (inRect(p, vec2(0.058, 0.79), 0.058)) {
    if (c_21 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.196, 0.79), 0.058)) {
    if (c_22 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.334, 0.79), 0.058)) {
    if (c_23 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.472, 0.79), 0.058)) {
    if (c_24 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.608, 0.79), 0.058)) {
    if (c_25 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  //3
  if (inRect(p, vec2(0.058, 0.645), 0.058)) {
    if (c_31 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.196, 0.645), 0.058)) {
    if (c_32 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.334, 0.645), 0.058)) {
    if (c_33 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.472, 0.645), 0.058)) {
    if (c_34 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.608, 0.645), 0.058)) {
    if (c_35 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  //4
  if (inRect(p, vec2(0.058, 0.5), 0.058)) {
    if (c_41 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.196, 0.5), 0.058)) {
    if (c_42 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.334, 0.5), 0.058)) {
    if (c_43 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.472, 0.5), 0.058)) {
    if (c_44 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.608, 0.5), 0.058)) {
    if (c_45 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  //5
  if (inRect(p, vec2(0.058, 0.355), 0.058)) {
    if (c_51 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.196, 0.355), 0.058)) {
    if (c_52 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.334, 0.355), 0.058)) {
    if (c_53 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.472, 0.355), 0.058)) {
    if (c_54 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.608, 0.355), 0.058)) {
    if (c_55 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  //6
  if (inRect(p, vec2(0.058, 0.211), 0.058)) {
    if (c_61 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.196, 0.211), 0.058)) {
    if (c_62 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.334, 0.211), 0.058)) {
    if (c_63 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.472, 0.211), 0.058)) {
    if (c_64 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.608, 0.211), 0.058)) {
    if (c_65 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  //7
  if (inRect(p, vec2(0.058, 0.065), 0.058)) {
    if (c_71 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.196, 0.066), 0.058)) {
    if (c_72 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.334, 0.066), 0.058)) {
    if (c_73 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.472, 0.066), 0.058)) {
    if (c_74 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  if (inRect(p, vec2(0.608, 0.066), 0.058)) {
    if (c_75 > 0) {
      destColor *= onColor;
    } else {
      destColor *= offColor;
    }
  }
  gl_FragColor = vec4(destColor , 1.0);

}