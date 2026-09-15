/* @ds-bundle: {"format":4,"namespace":"HokanDesignSystem_3594b4","components":[{"name":"ESCROW_STATES","sourcePath":"components/core/Badge.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"AddressField","sourcePath":"components/data/AddressField.jsx"},{"name":"CodeBlock","sourcePath":"components/data/CodeBlock.jsx"},{"name":"EmptyState","sourcePath":"components/data/EmptyState.jsx"},{"name":"KeyValue","sourcePath":"components/data/KeyValue.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Toast","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Choice.jsx"},{"name":"Radio","sourcePath":"components/forms/Choice.jsx"},{"name":"Switch","sourcePath":"components/forms/Choice.jsx"},{"name":"Choice","sourcePath":"components/forms/Choice.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Input.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"9fc8b10e8403","components/core/Button.jsx":"cd9a85211d0e","components/core/Card.jsx":"0d5b65a79153","components/core/Icon.jsx":"ffacb7d0b9f0","components/core/IconButton.jsx":"95a1faffe185","components/data/AddressField.jsx":"6b41f9cfded8","components/data/CodeBlock.jsx":"8fcf40e3478c","components/data/EmptyState.jsx":"324757ef6d1a","components/data/KeyValue.jsx":"50aebdbb9bec","components/data/Table.jsx":"66b83fcb449d","components/feedback/Alert.jsx":"839031a4a827","components/feedback/Dialog.jsx":"bf9514c4fe4f","components/feedback/Skeleton.jsx":"d6851e22569e","components/forms/Choice.jsx":"22418116944b","components/forms/Field.jsx":"65777fffccca","components/forms/Input.jsx":"664c9ee78872","components/navigation/Breadcrumb.jsx":"44b38e2d4bf1","components/navigation/SideNav.jsx":"13afd5f44e65","components/navigation/Tabs.jsx":"3585a697c980","components/navigation/TopBar.jsx":"c069fd806112","ui_kits/console/CreateEscrowDialog.jsx":"291b54af4f29","ui_kits/console/EscrowDetail.jsx":"889ca2731e7b","ui_kits/console/EscrowList.jsx":"4aab36c8c41b","ui_kits/console/shared.jsx":"3ca5df7eb4d2"},"inlinedExternals":[],"unexposedExports":[{"name":"truncate","sourcePath":"components/data/AddressField.jsx"}]} */

(() => {

const __ds_ns = (window.HokanDesignSystem_3594b4 = window.HokanDesignSystem_3594b4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function Card({
  level = "card",
  padding = 24,
  children,
  style,
  ...rest
}) {
  return React.createElement("div", {
    style: {
      background: `var(--${level})`,
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",
      padding,
      color: "var(--text)",
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const P = {
  lock: '<path d="M7 11V8a5 5 0 0 1 10 0v3"/><rect x="5" y="11" width="14" height="10"/>',
  check: '<path d="M5 12l5 5L20 7"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  scale: '<path d="M12 3v18M4 8h16M6 8l-3 6h6zM18 8l-3 6h6z"/>',
  undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-4"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  copy: '<rect x="9" y="9" width="12" height="12"/><path d="M5 15V5h10"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>',
  chevronDown: '<path d="M6 9l6 6 6-6"/>',
  chevronRight: '<path d="M9 6l6 6-6 6"/>',
  arrowRight: '<path d="M4 12h16M14 6l6 6-6 6"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.5"/>',
  warning: '<path d="M12 3 2 21h20zM12 10v5M12 18v.5"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  file: '<path d="M6 3h8l4 4v14H6zM14 3v4h4M9 12h6M9 16h6"/>'
};
function Icon({
  name,
  size = 16,
  stroke = 1.5,
  style,
  ...rest
}) {
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "square",
    strokeLinejoin: "miter",
    "aria-hidden": true,
    style: {
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: P[name] || ""
    },
    ...rest
  });
}
Icon.names = Object.keys(P);
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const ESCROW_STATES = {
  pending: {
    label: "Pending",
    icon: "clock",
    token: "--state-pending"
  },
  locked: {
    label: "Locked",
    icon: "lock",
    token: "--state-locked"
  },
  dispute: {
    label: "In dispute",
    icon: "scale",
    token: "--state-dispute"
  },
  released: {
    label: "Released",
    icon: "check",
    token: "--state-released"
  },
  refunded: {
    label: "Refunded",
    icon: "undo",
    token: "--state-refunded"
  },
  expired: {
    label: "Expired",
    icon: "x",
    token: "--state-expired"
  }
};
function Badge({
  state,
  children,
  icon,
  tone = "outline",
  size = "md",
  style
}) {
  const st = state ? ESCROW_STATES[state] : null;
  const color = st ? `var(${st.token})` : "var(--text-2)";
  const iconName = icon || st && st.icon;
  const pad = size === "sm" ? "1px 6px 1px 5px" : "3px 8px 3px 6px";
  return React.createElement("span", {
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-sans)",
      fontSize: size === "sm" ? 12 : 13,
      lineHeight: "18px",
      fontWeight: 500,
      color: tone === "solid" ? "var(--page)" : color,
      background: tone === "solid" ? color : "transparent",
      border: `1px solid ${tone === "solid" ? color : st ? color : "var(--border-input)"}`,
      borderRadius: "var(--radius-sm)",
      padding: pad,
      whiteSpace: "nowrap",
      ...style
    }
  }, iconName ? React.createElement(__ds_scope.Icon, {
    name: iconName,
    size: size === "sm" ? 12 : 14,
    stroke: 1.75
  }) : null, children || st && st.label);
}
Object.assign(__ds_scope, { ESCROW_STATES, Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  fontFamily: "var(--font-sans)",
  fontWeight: 500,
  fontSize: 14,
  lineHeight: "20px",
  borderRadius: "var(--radius-sm)",
  border: "1px solid transparent",
  cursor: "pointer",
  transition: "background-color var(--motion-fast) var(--ease), color var(--motion-fast) var(--ease)",
  whiteSpace: "nowrap",
  textDecoration: "none"
};
const sizes = {
  sm: {
    height: 32,
    padding: "0 12px",
    fontSize: 13
  },
  md: {
    height: 40,
    padding: "0 16px"
  },
  lg: {
    height: 48,
    padding: "0 20px",
    fontSize: 16
  }
};
const variants = {
  primary: {
    bg: "var(--accent)",
    color: "var(--accent-text)",
    border: "var(--accent)",
    hbg: "var(--accent-hover)"
  },
  secondary: {
    bg: "transparent",
    color: "var(--text)",
    border: "var(--border-input)",
    hbg: "var(--elevated)"
  },
  ghost: {
    bg: "transparent",
    color: "var(--text)",
    border: "transparent",
    hbg: "var(--elevated)"
  },
  destructive: {
    bg: "transparent",
    color: "var(--accent)",
    border: "var(--accent)",
    hbg: "var(--accent-tint)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  loading = false,
  disabled = false,
  fullWidth,
  children,
  style,
  forceState,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const isHover = forceState === "hover" || hover,
    isActive = forceState === "active" || active;
  const off = disabled || loading;
  const s = {
    ...base,
    ...sizes[size],
    background: (isHover || isActive) && !off ? v.hbg : v.bg,
    color: v.color,
    borderColor: variant === "ghost" && !(isHover || isActive) ? "transparent" : variant === "ghost" ? "var(--border)" : v.border,
    opacity: off ? 0.4 : 1,
    cursor: off ? "not-allowed" : "pointer",
    width: fullWidth ? "100%" : undefined,
    outline: forceState === "focus" ? "2px solid var(--focus-ring)" : undefined,
    outlineOffset: 2,
    ...style
  };
  return React.createElement("button", {
    type: "button",
    disabled: off,
    "aria-busy": loading || undefined,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    ...rest
  }, loading ? React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 12,
      height: 12,
      border: "1.5px solid currentColor",
      borderRightColor: "transparent",
      borderRadius: "50%",
      animation: "hk-spin 800ms linear infinite"
    }
  }) : icon ? React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null, children, iconRight ? React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 16
  }) : null, React.createElement("style", null, "@keyframes hk-spin{to{transform:rotate(360deg)}}"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  size = 32,
  variant = "ghost",
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: size,
      height: size,
      display: "inline-grid",
      placeItems: "center",
      background: h ? "var(--elevated)" : "transparent",
      color: "var(--text-2)",
      border: variant === "secondary" ? "1px solid var(--border-input)" : "1px solid transparent",
      borderRadius: "var(--radius-sm)",
      cursor: "pointer",
      ...style
    },
    ...rest
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/AddressField.jsx
try { (() => {
function truncate(s, head = 9, tail = 4) {
  return !s || s.length <= head + tail + 1 ? s : s.slice(0, head) + "…" + s.slice(-tail);
}
function AddressField({
  value,
  label,
  head = 9,
  tail = 4,
  explorerHref,
  style
}) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    try {
      navigator.clipboard && navigator.clipboard.writeText(value);
    } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      height: 32,
      paddingLeft: 10,
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-sm)",
      background: "var(--card)",
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--text)",
      maxWidth: "100%",
      ...style
    }
  }, label ? React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--text-muted)",
      marginRight: 4
    }
  }, label) : null, React.createElement("span", {
    title: value,
    style: {
      whiteSpace: "nowrap"
    }
  }, truncate(value, head, tail)), React.createElement("span", {
    role: "status",
    "aria-live": "polite",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--state-released)",
      minWidth: copied ? undefined : 0,
      marginLeft: copied ? 4 : 0
    }
  }, copied ? "Copied" : ""), React.createElement(__ds_scope.IconButton, {
    icon: "copy",
    label: "Copy full value",
    size: 30,
    onClick: copy
  }), explorerHref ? React.createElement("a", {
    href: explorerHref,
    "aria-label": "View on explorer",
    style: {
      display: "inline-grid",
      placeItems: "center",
      width: 30,
      height: 30,
      color: "var(--text-2)",
      textDecoration: "none"
    }
  }, React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "square"
  }, React.createElement("path", {
    d: "M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"
  }))) : null);
}
Object.assign(__ds_scope, { truncate, AddressField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/AddressField.jsx", error: String((e && e.message) || e) }); }

// components/data/CodeBlock.jsx
try { (() => {
// Minimal highlighter in the Hokan palette: strings/keys clay-warm, numbers ink, keywords accent, comments muted.
const COLORS = {
  light: {
    key: "#3A3632",
    str: "#3E6B4A",
    num: "#14110F",
    kw: "#8E2C22",
    cm: "#6E675C",
    pn: "#8C857A"
  },
  dark: {
    key: "#C4BDB2",
    str: "#6FA57E",
    num: "#EFEAE0",
    kw: "#D9664F",
    cm: "#8C857A",
    pn: "#8C857A"
  }
};
function tokenize(src) {
  const re = /(\/\/.*$)|("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')|(\b\d[\d_.]*\b)|(\b(?:const|let|await|async|return|import|from|function|true|false|null|POST|GET|PUT|DELETE|curl)\b)|([{}\[\]():,;=])/gm;
  const out = [];
  let last = 0,
    m;
  while (m = re.exec(src)) {
    if (m.index > last) out.push(["pl", src.slice(last, m.index)]);
    out.push([m[1] ? "cm" : m[2] || m[3] ? /:\s*$/.test(src.slice(m.index + m[0].length, m.index + m[0].length + 2)) ? "key" : "str" : m[4] ? "num" : m[5] ? "kw" : "pn", m[0]]);
    last = re.lastIndex;
  }
  if (last < src.length) out.push(["pl", src.slice(last)]);
  return out;
}
function CodeBlock({
  code,
  language,
  tabs,
  activeTab,
  onTab,
  theme = "light",
  copy = true,
  style
}) {
  const c = COLORS[theme] || COLORS.light;
  const bg = theme === "dark" ? "#1C1917" : "#F7F4ED";
  return React.createElement("div", {
    style: {
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",
      background: bg,
      color: theme === "dark" ? "#EFEAE0" : "#14110F",
      overflow: "hidden",
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      lineHeight: "20px",
      ...style
    }
  }, tabs || language || copy ? React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      padding: "6px 8px 6px 12px",
      borderBottom: "1px solid var(--border)",
      fontFamily: "var(--font-sans)",
      fontSize: 12
    }
  }, tabs ? tabs.map(t => React.createElement("button", {
    key: t,
    type: "button",
    onClick: () => onTab && onTab(t),
    "aria-pressed": t === activeTab,
    style: {
      all: "unset",
      cursor: "pointer",
      padding: "4px 8px",
      borderRadius: 3,
      color: t === activeTab ? "inherit" : "var(--text-muted)",
      background: t === activeTab ? theme === "dark" ? "#24201D" : "#FDFBF6" : "transparent",
      fontWeight: 500
    }
  }, t)) : React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, language), copy ? React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, React.createElement(__ds_scope.IconButton, {
    icon: "copy",
    label: "Copy code",
    size: 28,
    onClick: () => {
      try {
        navigator.clipboard.writeText(code);
      } catch (e) {}
    }
  })) : null) : null, React.createElement("pre", {
    style: {
      margin: 0,
      padding: "14px 16px",
      overflowX: "auto",
      fontFamily: "inherit"
    }
  }, React.createElement("code", null, tokenize(code).map(([t, s], i) => React.createElement("span", {
    key: i,
    style: {
      color: c[t] || "inherit"
    }
  }, s)))));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/data/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = "file",
  title,
  description,
  action,
  style
}) {
  return React.createElement("div", {
    style: {
      border: "1px dashed var(--border-input)",
      borderRadius: "var(--radius-md)",
      padding: "40px 32px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 8,
      fontFamily: "var(--font-sans)",
      color: "var(--text)",
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    style: {
      color: "var(--text-muted)",
      marginBottom: 8
    }
  }), React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 500
    }
  }, title), description ? React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: "var(--text-muted)",
      maxWidth: 420,
      lineHeight: 1.5
    }
  }, description) : null, action ? React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, action) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/data/KeyValue.jsx
try { (() => {
function KeyValue({
  items,
  columns = 1,
  style
}) {
  return React.createElement("dl", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
      gap: "0 32px",
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      ...style
    }
  }, items.map((it, i) => React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "140px 1fr",
      gap: 16,
      padding: "10px 0",
      borderBottom: "1px solid var(--border)"
    }
  }, React.createElement("dt", {
    style: {
      color: "var(--text-muted)",
      margin: 0
    }
  }, it.label), React.createElement("dd", {
    style: {
      margin: 0,
      color: "var(--text)",
      fontFamily: it.mono ? "var(--font-mono)" : undefined,
      fontVariantNumeric: "tabular-nums",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, it.value))));
}
Object.assign(__ds_scope, { KeyValue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KeyValue.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function Table({
  columns,
  rows,
  sort,
  onSort,
  style
}) {
  const th = c => {
    const active = sort && sort.key === c.key;
    return React.createElement("th", {
      key: c.key,
      scope: "col",
      "aria-sort": active ? sort.dir === "asc" ? "ascending" : "descending" : undefined,
      style: {
        textAlign: c.align || "left",
        padding: "10px 12px",
        fontSize: 12,
        fontWeight: 500,
        color: "var(--text-muted)",
        borderBottom: "1px solid var(--border-input)",
        whiteSpace: "nowrap"
      }
    }, c.sortable ? React.createElement("button", {
      type: "button",
      onClick: () => onSort && onSort(c.key),
      style: {
        all: "unset",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        color: active ? "var(--text)" : "inherit",
        borderRadius: 2
      }
    }, c.label, React.createElement(__ds_scope.Icon, {
      name: "chevronDown",
      size: 12,
      style: {
        transform: active && sort.dir === "asc" ? "rotate(180deg)" : "none",
        opacity: active ? 1 : 0.5
      }
    })) : c.label);
  };
  return React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--text)",
      ...style
    }
  }, React.createElement("thead", null, React.createElement("tr", null, columns.map(th))), React.createElement("tbody", null, rows.map((r, i) => React.createElement("tr", {
    key: r.id || i
  }, columns.map(c => React.createElement("td", {
    key: c.key,
    style: {
      padding: "10px 12px",
      borderBottom: "1px solid var(--border)",
      textAlign: c.align || "left",
      fontFamily: c.mono ? "var(--font-mono)" : undefined,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap"
    }
  }, c.render ? c.render(r) : r[c.key]))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const SEV = {
  info: {
    icon: "info",
    token: "var(--text-2)",
    word: "Note"
  },
  success: {
    icon: "check",
    token: "var(--state-released)",
    word: "Done"
  },
  warning: {
    icon: "warning",
    token: "var(--state-pending)",
    word: "Warning"
  },
  error: {
    icon: "x",
    token: "var(--accent)",
    word: "Error"
  }
};
function Alert({
  severity = "info",
  title,
  children,
  onDismiss,
  style
}) {
  const s = SEV[severity] || SEV.info;
  return React.createElement("div", {
    role: severity === "error" ? "alert" : "status",
    style: {
      display: "grid",
      gridTemplateColumns: "16px 1fr auto",
      gap: 12,
      padding: "12px 14px",
      border: "1px solid var(--border)",
      borderLeft: `2px solid ${s.token}`,
      borderRadius: "var(--radius-sm)",
      background: "var(--card)",
      color: "var(--text)",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: 1.5,
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 16,
    style: {
      color: s.token,
      marginTop: 2
    }
  }), React.createElement("div", null, React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, title || s.word), children ? React.createElement("span", {
    style: {
      color: "var(--text-2)"
    }
  }, " — ", children) : null), onDismiss ? React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      all: "unset",
      cursor: "pointer",
      color: "var(--text-muted)",
      display: "grid",
      placeItems: "center",
      width: 20,
      height: 20
    }
  }, React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })) : null);
}
function Toast({
  severity = "info",
  title,
  children,
  action,
  style
}) {
  const s = SEV[severity] || SEV.info;
  return React.createElement("div", {
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 12px 10px 14px",
      background: "var(--inverse-surface)",
      color: "var(--inverse-text)",
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      minWidth: 280,
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 16
  }), React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, title), children ? React.createElement("span", {
    style: {
      opacity: 0.8
    }
  }, children) : null, action ? React.createElement("button", {
    type: "button",
    onClick: action.onClick,
    style: {
      all: "unset",
      cursor: "pointer",
      marginLeft: "auto",
      fontWeight: 500,
      textDecoration: "underline",
      textUnderlineOffset: 2
    }
  }, action.label) : null);
}
Object.assign(__ds_scope, { Alert, Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 480,
  inline = false,
  style
}) {
  if (!open) return null;
  const panel = React.createElement("div", {
    role: "dialog",
    "aria-modal": !inline,
    "aria-labelledby": "hk-dialog-title",
    style: {
      width,
      maxWidth: "100%",
      background: "var(--elevated)",
      color: "var(--text)",
      border: "1px solid var(--border-input)",
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 20px",
      borderBottom: "1px solid var(--border)"
    }
  }, React.createElement("h2", {
    id: "hk-dialog-title",
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 500
    }
  }, title), onClose ? React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      all: "unset",
      cursor: "pointer",
      color: "var(--text-muted)",
      display: "grid",
      placeItems: "center",
      width: 28,
      height: 28,
      borderRadius: 4
    }
  }, React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null), React.createElement("div", {
    style: {
      padding: 20,
      fontSize: 14,
      lineHeight: 1.5,
      color: "var(--text-2)"
    }
  }, children), footer ? React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      padding: "12px 20px 16px"
    }
  }, footer) : null);
  if (inline) return panel;
  return React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(20,17,15,0.4)",
      display: "grid",
      placeItems: "center",
      padding: 24,
      zIndex: 50
    },
    onClick: onClose
  }, React.createElement("div", {
    onClick: e => e.stopPropagation()
  }, panel));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function Skeleton({
  width = "100%",
  height = 14,
  radius = 3,
  lines,
  style
}) {
  const bar = (k, w) => React.createElement("span", {
    key: k,
    "aria-hidden": true,
    style: {
      display: "block",
      width: w,
      height,
      borderRadius: radius,
      background: "var(--border)",
      animation: "hk-pulse 1.6s ease-in-out infinite",
      ...style
    }
  });
  const el = lines ? React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, Array.from({
    length: lines
  }, (_, i) => bar(i, i === lines - 1 ? "60%" : width))) : bar(0, width);
  return React.createElement(React.Fragment, null, el, React.createElement("style", null, "@keyframes hk-pulse{0%,100%{opacity:1}50%{opacity:.55}}"));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Choice.jsx
try { (() => {
const box = (checked, disabled, radio) => ({
  width: 18,
  height: 18,
  flexShrink: 0,
  boxSizing: "border-box",
  border: `1px solid ${checked ? "var(--text)" : "var(--border-input)"}`,
  borderRadius: radio ? "50%" : 3,
  background: checked ? "var(--text)" : "var(--elevated)",
  display: "grid",
  placeItems: "center",
  opacity: disabled ? 0.4 : 1,
  transition: "background-color var(--motion-fast) var(--ease)"
});
const wrap = disabled => ({
  display: "inline-flex",
  alignItems: "flex-start",
  gap: 10,
  fontFamily: "var(--font-sans)",
  fontSize: 14,
  lineHeight: "18px",
  color: "var(--text)",
  cursor: disabled ? "not-allowed" : "pointer",
  opacity: disabled ? 0.6 : 1
});
const hidden = {
  position: "absolute",
  opacity: 0,
  width: 1,
  height: 1,
  margin: 0
};
function Checkbox({
  checked = false,
  onChange,
  disabled,
  label,
  description,
  forceFocus
}) {
  const [f, setF] = React.useState(false);
  return React.createElement("label", {
    style: wrap(disabled)
  }, React.createElement("input", {
    type: "checkbox",
    checked,
    disabled,
    onChange: e => onChange && onChange(e.target.checked),
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: hidden
  }), React.createElement("span", {
    "aria-hidden": true,
    style: {
      ...box(checked, disabled, false),
      outline: f || forceFocus ? "2px solid var(--focus-ring)" : "none",
      outlineOffset: 2
    }
  }, checked ? React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--page)",
    strokeWidth: 2.5,
    strokeLinecap: "square"
  }, React.createElement("path", {
    d: "M5 12l5 5L20 7"
  })) : null), React.createElement("span", null, label, description ? React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, description) : null));
}
function Radio({
  checked = false,
  onChange,
  disabled,
  label,
  name,
  value,
  forceFocus
}) {
  const [f, setF] = React.useState(false);
  return React.createElement("label", {
    style: wrap(disabled)
  }, React.createElement("input", {
    type: "radio",
    name,
    value,
    checked,
    disabled,
    onChange: () => onChange && onChange(value),
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: hidden
  }), React.createElement("span", {
    "aria-hidden": true,
    style: {
      ...box(checked, disabled, true),
      background: "var(--elevated)",
      outline: f || forceFocus ? "2px solid var(--focus-ring)" : "none",
      outlineOffset: 2
    }
  }, checked ? React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--text)"
    }
  }) : null), React.createElement("span", null, label));
}
function Switch({
  checked = false,
  onChange,
  disabled,
  label,
  forceFocus
}) {
  const [f, setF] = React.useState(false);
  return React.createElement("label", {
    style: wrap(disabled)
  }, React.createElement("input", {
    type: "checkbox",
    role: "switch",
    "aria-checked": checked,
    checked,
    disabled,
    onChange: e => onChange && onChange(e.target.checked),
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: hidden
  }), React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 32,
      height: 18,
      flexShrink: 0,
      boxSizing: "border-box",
      borderRadius: 4,
      border: `1px solid ${checked ? "var(--text)" : "var(--border-input)"}`,
      background: checked ? "var(--text)" : "var(--elevated)",
      position: "relative",
      transition: "background-color var(--motion-fast) var(--ease)",
      outline: f || forceFocus ? "2px solid var(--focus-ring)" : "none",
      outlineOffset: 2
    }
  }, React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: checked ? 15 : 2,
      width: 12,
      height: 12,
      borderRadius: 2,
      background: checked ? "var(--page)" : "var(--text-2)",
      transition: "left var(--motion-fast) var(--ease)"
    }
  })), React.createElement("span", null, label, React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      marginLeft: 6,
      fontSize: 13
    }
  }, checked ? "On" : "Off")));
}
const Choice = {
  Checkbox,
  Radio,
  Switch
};
Object.assign(__ds_scope, { Checkbox, Radio, Switch, Choice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Choice.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  helper,
  error,
  required,
  htmlFor,
  children,
  style
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label ? React.createElement("label", {
    htmlFor,
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text)"
    }
  }, label, required ? React.createElement("span", {
    "aria-hidden": true,
    style: {
      color: "var(--text-muted)"
    }
  }, " (required)") : null) : null, children, error ? React.createElement("div", {
    role: "alert",
    style: {
      fontSize: 13,
      color: "var(--accent)",
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 6,
      height: 6,
      background: "currentColor",
      display: "inline-block"
    }
  }), error) : helper ? React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, helper) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const ctrl = (invalid, focus) => ({
  height: 40,
  boxSizing: "border-box",
  width: "100%",
  background: "var(--elevated)",
  color: "var(--text)",
  border: `1px solid ${invalid ? "var(--accent)" : "var(--border-input)"}`,
  borderRadius: "var(--radius-sm)",
  padding: "0 12px",
  fontSize: 14,
  fontFamily: "var(--font-sans)",
  outline: focus ? "2px solid var(--focus-ring)" : "none",
  outlineOffset: 2
});
function Input({
  mono,
  invalid,
  prefix,
  suffix,
  forceFocus,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const inner = React.createElement("input", {
    "aria-invalid": invalid || undefined,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      ...ctrl(invalid, forceFocus || f),
      fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
      fontVariantNumeric: "tabular-nums",
      paddingLeft: prefix ? 32 : 12,
      paddingRight: suffix ? 48 : 12,
      ...style
    },
    ...rest
  });
  if (!prefix && !suffix) return inner;
  return React.createElement("div", {
    style: {
      position: "relative",
      width: "100%"
    }
  }, inner, prefix ? React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 0,
      height: 40,
      display: "flex",
      alignItems: "center",
      color: "var(--text-muted)",
      fontSize: 13,
      pointerEvents: "none"
    }
  }, prefix) : null, suffix ? React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      top: 0,
      height: 40,
      display: "flex",
      alignItems: "center",
      color: "var(--text-muted)",
      fontSize: 13,
      fontFamily: "var(--font-mono)",
      pointerEvents: "none"
    }
  }, suffix) : null);
}
function Select({
  children,
  invalid,
  forceFocus,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return React.createElement("div", {
    style: {
      position: "relative",
      width: "100%"
    }
  }, React.createElement("select", {
    "aria-invalid": invalid || undefined,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      ...ctrl(invalid, forceFocus || f),
      appearance: "none",
      paddingRight: 36,
      cursor: "pointer",
      ...style
    },
    ...rest
  }, children), React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "square",
    style: {
      position: "absolute",
      right: 12,
      top: 12,
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  }, React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })));
}
Object.assign(__ds_scope, { Input, Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items,
  style
}) {
  return React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      ...style
    }
  }, React.createElement("ol", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, last ? React.createElement("span", {
      "aria-current": "page",
      style: {
        color: "var(--text)",
        fontWeight: 500
      }
    }, it.label) : React.createElement("a", {
      href: it.href || "#",
      style: {
        color: "var(--text-muted)",
        textDecoration: "none"
      }
    }, it.label), last ? null : React.createElement(__ds_scope.Icon, {
      name: "chevronRight",
      size: 12,
      style: {
        color: "var(--clay-400)"
      }
    }));
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
function SideNav({
  sections = [],
  active,
  onSelect,
  style
}) {
  return React.createElement("nav", {
    "aria-label": "Docs",
    style: {
      width: 220,
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      ...style
    }
  }, sections.map(s => React.createElement("div", {
    key: s.title
  }, React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      padding: "0 10px 6px"
    }
  }, s.title), React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      borderLeft: "1px solid var(--border)"
    }
  }, s.items.map(it => {
    const a = it === active;
    return React.createElement("li", {
      key: it
    }, React.createElement("a", {
      href: "#",
      "aria-current": a ? "page" : undefined,
      onClick: e => {
        e.preventDefault();
        onSelect && onSelect(it);
      },
      style: {
        display: "block",
        padding: "5px 10px",
        marginLeft: -1,
        color: a ? "var(--text)" : "var(--text-2)",
        fontWeight: a ? 500 : 400,
        textDecoration: "none",
        borderLeft: `1px solid ${a ? "var(--text)" : "transparent"}`
      }
    }, it));
  })))));
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs,
  active,
  onChange,
  style
}) {
  return React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid var(--border)",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      ...style
    }
  }, tabs.map(t => {
    const a = t === active;
    return React.createElement("button", {
      key: t,
      role: "tab",
      type: "button",
      "aria-selected": a,
      onClick: () => onChange && onChange(t),
      style: {
        all: "unset",
        cursor: "pointer",
        padding: "8px 12px",
        marginBottom: -1,
        color: a ? "var(--text)" : "var(--text-2)",
        fontWeight: a ? 500 : 400,
        borderBottom: `2px solid ${a ? "var(--text)" : "transparent"}`,
        borderRadius: "3px 3px 0 0"
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function TopBar({
  links = [],
  active,
  action,
  markSrc = "assets/logo/mark-sumi.svg",
  markVariant = "sumi",
  style
}) {
  return React.createElement("header", {
    style: {
      height: 56,
      display: "flex",
      alignItems: "center",
      gap: 32,
      padding: "0 24px",
      borderBottom: "1px solid var(--border)",
      background: "var(--page)",
      color: "var(--text)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, React.createElement("a", {
    href: "#",
    "aria-label": "Hokan home",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      textDecoration: "none",
      color: "inherit"
    }
  }, React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    "aria-hidden": true
  }, React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 12,
    fill: markVariant === "seal" ? "var(--accent)" : "var(--text)"
  }), React.createElement("path", {
    d: "M9 7H6.5V17H9M15 7H17.5V17H15",
    fill: "none",
    stroke: markVariant === "seal" ? "var(--accent-text)" : "var(--page)",
    strokeWidth: 1.75
  }), React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 1.9,
    fill: markVariant === "seal" ? "var(--accent-text)" : "var(--page)"
  })), React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, "hokan")), React.createElement("nav", {
    "aria-label": "Primary",
    style: {
      display: "flex",
      gap: 20,
      fontSize: 14
    }
  }, links.map(l => React.createElement("a", {
    key: l.label,
    href: l.href || "#",
    "aria-current": l.label === active ? "page" : undefined,
    style: {
      color: l.label === active ? "var(--text)" : "var(--text-2)",
      textDecoration: "none",
      fontWeight: l.label === active ? 500 : 400,
      paddingBottom: 2,
      borderBottom: l.label === active ? "1px solid var(--text)" : "1px solid transparent"
    }
  }, l.label))), action ? React.createElement("div", {
    style: {
      marginLeft: "auto"
    }
  }, action) : null);
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/CreateEscrowDialog.jsx
try { (() => {
function CreateEscrowDialog({
  open,
  onClose,
  onCreate
}) {
  const {
    Dialog,
    Field,
    Input,
    Select,
    Checkbox,
    Button
  } = NS;
  const [amount, setAmount] = React.useState("");
  const [addr, setAddr] = React.useState("");
  const [cond, setCond] = React.useState("both");
  const [ack, setAck] = React.useState(false);
  const [tried, setTried] = React.useState(false);
  const amtErr = tried && !/^\d/.test(amount) ? "Enter an amount in ADA." : undefined;
  const addrErr = tried && !addr.startsWith("addr1") ? "Beneficiary must be a mainnet address." : undefined;
  const submit = () => {
    setTried(true);
    if (/^\d/.test(amount) && addr.startsWith("addr1") && ack) onCreate({
      amount,
      addr,
      cond
    });
  };
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "Create escrow",
    onClose: onClose,
    width: 520,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: submit
    }, "Create escrow"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Amount",
    required: true,
    error: amtErr,
    helper: "Locked in the contract on creation."
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    value: amount,
    onChange: e => setAmount(e.target.value),
    placeholder: "0.000000",
    suffix: "ADA",
    invalid: !!amtErr
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Beneficiary address",
    required: true,
    error: addrErr
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    value: addr,
    onChange: e => setAddr(e.target.value),
    placeholder: "addr1\u2026",
    invalid: !!addrErr
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Release condition",
    helper: "Defines who or what can release the funds."
  }, /*#__PURE__*/React.createElement(Select, {
    value: cond,
    onChange: e => setCond(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "both"
  }, "Both signatures"), /*#__PURE__*/React.createElement("option", {
    value: "deadline"
  }, "Deadline"), /*#__PURE__*/React.createElement("option", {
    value: "oracle"
  }, "Oracle attestation"), /*#__PURE__*/React.createElement("option", {
    value: "arbiter"
  }, "Arbiter decision"))), /*#__PURE__*/React.createElement(Checkbox, {
    checked: ack,
    onChange: setAck,
    label: "I understand funds cannot be withdrawn until the condition is met."
  })));
}
Object.assign(window, {
  CreateEscrowDialog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/CreateEscrowDialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/EscrowDetail.jsx
try { (() => {
function EscrowDetail({
  escrow,
  onBack,
  onRelease
}) {
  const {
    Breadcrumb,
    Badge,
    Button,
    Card,
    KeyValue,
    AddressField,
    CodeBlock,
    Alert,
    Tabs,
    Icon
  } = NS;
  const [tab, setTab] = React.useState("Overview");
  const [lang, setLang] = React.useState("curl");
  const code = {
    curl: `curl https://api.hokan.io/v1/escrows/${escrow.id}/release \\\n  -H "Authorization: Bearer sk_live_…" \\\n  -d signature=84a4…f21c`,
    node: `await hokan.escrows.release("${escrow.id}", {\n  signature: "84a4…f21c",\n});`,
    python: `hokan.escrows.release("${escrow.id}",\n  signature="84a4…f21c")`
  }[lang];
  const events = [{
    t: "14 Sep 2026 · 09:12 UTC",
    label: "Funds locked",
    tx: "a91f3c…7e20",
    state: "locked"
  }, {
    t: "14 Sep 2026 · 09:11 UTC",
    label: "Escrow created",
    tx: "4b02de…c118",
    state: "pending"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Escrows",
      href: "#"
    }, {
      label: escrow.id
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(H1, null, /*#__PURE__*/React.createElement(Mono, null, escrow.id)), /*#__PURE__*/React.createElement(Badge, {
    state: escrow.state
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-2)",
      fontSize: 14
    }
  }, "Release requires both signatures. Funds are locked until the condition is met.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onBack
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "external"
  }, "View on explorer"), /*#__PURE__*/React.createElement(Button, {
    onClick: onRelease,
    disabled: escrow.state !== "locked"
  }, "Release funds"))), escrow.state === "dispute" && /*#__PURE__*/React.createElement(Alert, {
    severity: "warning",
    title: "Dispute opened"
  }, "The arbiter has 7 days to decide. Funds stay locked until then."), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["Overview", "Events", "API"],
    active: tab,
    onChange: setTab
  }), tab === "Overview" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Terms"), /*#__PURE__*/React.createElement(KeyValue, {
    columns: 1,
    style: {
      marginTop: 16
    },
    items: [{
      label: "Amount",
      value: `${escrow.amount} ADA`,
      mono: true
    }, {
      label: "Network fee",
      value: "0.192 ADA",
      mono: true
    }, {
      label: "Release condition",
      value: escrow.release
    }, {
      label: "Deadline",
      value: "21 Sep 2026 · 00:00 UTC",
      mono: true
    }, {
      label: "Created",
      value: escrow.created,
      mono: true
    }, {
      label: "Block",
      value: "10 412 118",
      mono: true
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Parties"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(AddressField, {
    label: "Depositor",
    value: "addr1q8f3k2m9v4x7p1r6t0w5n8c3d2h9j4l7s6a1b2c3d4e5f6g7h8j9k0l1m2n3p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0k7f2",
    explorerHref: "#"
  }), /*#__PURE__*/React.createElement(AddressField, {
    label: "Beneficiary",
    value: "addr1q9x4m2v8n3p4t7r2t9w1z3k8v5s6d1c7y4w9b2n5f8g1h3j6k9l2m5n8p1q4r7s0t3u6v9w2x5y8z1a4b7c0d3e6f9m2c9",
    explorerHref: "#"
  }), /*#__PURE__*/React.createElement(AddressField, {
    label: "Contract",
    value: "addr1w9hokan3escrow7v2audited4contract8script1hash5mainnet2deploy6ref9x0z3q7k4m8n1p5r2t6w9y3c",
    explorerHref: "#"
  })))), tab === "Events" && /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, events.map((e, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "220px 1fr auto",
      gap: 16,
      alignItems: "center",
      padding: "14px 20px",
      borderTop: i ? "1px solid var(--border)" : "none",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    muted: true
  }, e.t), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    state: e.state,
    size: "sm"
  }), e.label), /*#__PURE__*/React.createElement(Mono, {
    muted: true
  }, e.tx))))), tab === "API" && /*#__PURE__*/React.createElement(CodeBlock, {
    code: code,
    language: lang,
    tabs: ["curl", "node", "python"],
    activeTab: lang,
    onTab: setLang,
    copy: true
  }));
}
Object.assign(window, {
  EscrowDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/EscrowDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/EscrowList.jsx
try { (() => {
function EscrowList({
  onOpen,
  onCreate
}) {
  const {
    Button,
    Tabs,
    Table,
    Badge,
    Input,
    Icon,
    Card,
    EmptyState
  } = NS;
  const [tab, setTab] = React.useState("All");
  const [q, setQ] = React.useState("");
  const [sort, setSort] = React.useState({
    key: "amount",
    dir: "desc"
  });
  const filt = ESCROWS.filter(r => (tab === "All" || (tab === "Active" ? ["locked", "pending", "dispute"].includes(r.state) : ["released", "refunded", "expired"].includes(r.state))) && (r.id + r.counter).includes(q));
  const columns = [{
    key: "id",
    label: "Escrow",
    mono: true,
    render: r => /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onOpen(r);
      },
      style: {
        color: "var(--text)",
        fontFamily: "var(--font-mono)"
      }
    }, r.id)
  }, {
    key: "counter",
    label: "Counterparty",
    mono: true
  }, {
    key: "amount",
    label: "Amount",
    mono: true,
    align: "right",
    sortable: true,
    render: r => /*#__PURE__*/React.createElement(React.Fragment, null, r.amount, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, "ADA"))
  }, {
    key: "state",
    label: "State",
    render: r => /*#__PURE__*/React.createElement(Badge, {
      state: r.state,
      size: "sm"
    })
  }, {
    key: "release",
    label: "Release condition"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Mainnet \xB7 acme-marketplace"), /*#__PURE__*/React.createElement(H1, null, "Escrows")), /*#__PURE__*/React.createElement(Button, {
    onClick: onCreate
  }, "Create escrow")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Locked",
    value: "16 600.000000",
    unit: "ADA"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Active escrows",
    value: "3"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Released \xB7 30 days",
    value: "48 000.000000",
    unit: "ADA"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "In dispute",
    value: "1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["All", "Active", "Settled"],
    active: tab,
    onChange: setTab,
    style: {
      borderBottom: "none"
    }
  }), /*#__PURE__*/React.createElement(Input, {
    mono: true,
    placeholder: "Search id or address",
    value: q,
    onChange: e => setQ(e.target.value),
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "search"
    }),
    style: {
      width: 280
    }
  })), filt.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement(Table, {
    columns: columns,
    rows: filt,
    sort: sort,
    onSort: k => setSort(s => ({
      key: k,
      dir: s.key === k && s.dir === "asc" ? "desc" : "asc"
    }))
  })) : /*#__PURE__*/React.createElement(EmptyState, {
    icon: "file",
    title: "No escrows match",
    description: "Try another id or clear the search.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setQ("")
    }, "Clear search")
  }));
}
Object.assign(window, {
  EscrowList
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/EscrowList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/shared.jsx
try { (() => {
const NS = window.HokanDesignSystem_3594b4 || null;
const {
  Card
} = NS || {};
const ESCROWS = [{
  id: "esc_9f2k7",
  counter: "addr1q9x4m2v8...k7f2",
  amount: "12 500.000000",
  state: "locked",
  created: "14 Sep 2026",
  release: "Both signatures"
}, {
  id: "esc_7ab21",
  counter: "addr1qx8n3p4t...m2c9",
  amount: "3 200.000000",
  state: "pending",
  created: "14 Sep 2026",
  release: "Deadline 21 Sep"
}, {
  id: "esc_5cd03",
  counter: "addr1q7r2t9w1...h4d8",
  amount: "48 000.000000",
  state: "released",
  created: "11 Sep 2026",
  release: "Oracle attestation"
}, {
  id: "esc_3ef88",
  counter: "addr1qz3k8v5s...p1x6",
  amount: "900.000000",
  state: "dispute",
  created: "09 Sep 2026",
  release: "Arbiter decision"
}, {
  id: "esc_2gh14",
  counter: "addr1qm6d1c7y...r8t3",
  amount: "7 750.000000",
  state: "refunded",
  created: "02 Sep 2026",
  release: "Deadline passed"
}, {
  id: "esc_1ij60",
  counter: "addr1qp4w9b2n...j5q7",
  amount: "1 000.000000",
  state: "expired",
  created: "28 Aug 2026",
  release: "Deadline 05 Sep"
}];
const Mono = ({
  children,
  muted
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontVariantNumeric: "tabular-nums",
    color: muted ? "var(--text-muted)" : "inherit"
  }
}, children);
const Eyebrow = ({
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "var(--tracking-label)",
    textTransform: "uppercase",
    color: "var(--text-muted)"
  }
}, children);
const H1 = ({
  children
}) => /*#__PURE__*/React.createElement("h1", {
  style: {
    margin: 0,
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: "var(--text-display-md)",
    lineHeight: "var(--lh-display-md)",
    letterSpacing: "var(--tracking-display)"
  }
}, children);
function Stat({
  label,
  value,
  unit
}) {
  return NS ? /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement(Eyebrow, null, label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 20,
      lineHeight: 1.2,
      overflowWrap: "anywhere"
    }
  }, /*#__PURE__*/React.createElement(Mono, null, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      marginLeft: 6
    }
  }, unit))) : null;
}
Object.assign(window, {
  NS,
  ESCROWS,
  Mono,
  Eyebrow,
  H1,
  Stat
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ESCROW_STATES = __ds_scope.ESCROW_STATES;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.AddressField = __ds_scope.AddressField;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.KeyValue = __ds_scope.KeyValue;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Choice = __ds_scope.Choice;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
