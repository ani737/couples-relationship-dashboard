# 📱 Mobile App Setup Guide - Expo Approach

## Quick Start Summary

This guide will help you set up the React Native Expo app locally on your computer so you can test it on your Android phone **today**!

## Prerequisites

✅ Node.js installed (v16 or v18)  
✅ Android phone with internet  
✅ Basic command line knowledge

---

## Step 1: Install Required Tools (5 minutes)

Open your terminal (Command Prompt/PowerShell on Windows, Terminal on Mac) and run:

```bash
# Install Expo CLI globally
npm install -g expo-cli

# Verify installation
expo --version
```

---

## Step 2: Download Expo Go App (2 minutes)

On your Android phone:

1. Open Google Play Store
2. Search for **"Expo Go"**
3. Install the app (it's free)
4. Open it and create a free account

---

## Step 3: Clone and Setup Project (5 minutes)

```bash
# Clone your repository
git clone https://github.com/ani737/couples-relationship-dashboard.git

# Navigate to mobile folder
cd couples-relationship-dashboard/mobile

# Install dependencies
npm install
```

---

## Step 4: Start Development Server (1 minute)

```bash
npm start
```

This will:
- Start the Expo development server
- Show a QR code in the terminal
- Open Expo DevTools in your browser

---

## Step 5: Test on Your Phone (1 minute)

**Option A: Scan QR Code (Easiest)**
1. Open Expo Go app on your phone
2. Tap "Scan QR Code"
3. Scan the QR code from your terminal/browser
4. Wait 10-20 seconds for the app to load

**Option B: Send Link**
1. In Expo DevTools, click "Send link with email"
2. Enter your email
3. Open email on your phone
4. Tap the link to open in Expo Go

---

## Folder Structure

We'll create this structure:

```
mobile/
├── package.json          (✅ Already created)
├── app.json              (Expo configuration)
├── App.tsx               (Main entry point)
├── app/                  (Expo Router pages)
│   ├── (tabs)/
│   │   ├── _layout.tsx   (Tab navigation)
│   │   ├── index.tsx     (Home page)
│   │   ├── tasks.tsx     (Tasks page)
│   │   ├── rewards.tsx   (Rewards page)
│   │   ├── memories.tsx  (Memories page)
│   │   └── profile.tsx   (Profile page)
│   └── _layout.tsx
├── components/
│   └── BottomNav.tsx     (Bottom navigation)
└── assets/
    ├── icon.png
    └── splash.png
```

---

## Files to Create

I'll create these files for you in the repository. You can also create them locally:

### 1. `app.json` - Expo Configuration

Created automatically during setup.

### 2. `App.tsx` - Entry Point

This will be the main file that loads your app.

### 3. App Pages

We'll convert each of your web pages to React Native:
- Home → `app/(tabs)/index.tsx`
- Tasks → `app/(tabs)/tasks.tsx`
- Rewards → `app/(tabs)/rewards.tsx`
- Memories → `app/(tabs)/memories.tsx`
- Profile → `app/(tabs)/profile.tsx`

---

## Development Workflow

### Making Changes:

1. **Edit any file** in your code editor
2. **Save the file**
3. **Shake your phone** or press `R` in terminal to reload
4. See changes instantly!

### Debugging:

- **Console logs**: Appear in terminal
- **Errors**: Show on phone screen with stack trace
- **Dev Menu**: Shake phone to open

---

## Key Differences: Web vs Mobile

### HTML → React Native Components

```jsx
// ❌ Web (Next.js)
<div className="container">
  <h1>Title</h1>
  <button onClick={handleClick}>Click</button>
</div>

// ✅ Mobile (React Native)
<View style={styles.container}>
  <Text style={styles.title}>Title</Text>
  <TouchableOpacity onPress={handleClick}>
    <Text>Click</Text>
  </TouchableOpacity>
</View>
```

### CSS → StyleSheet

```jsx
// ❌ Web
className="bg-pink-100 rounded-lg p-4"

// ✅ Mobile
style={{
  backgroundColor: '#fce7f3',
  borderRadius: 8,
  padding: 16
}}
```

### Common Mappings:

| Web (HTML/CSS) | Mobile (React Native) |
|---|---|
| `<div>` | `<View>` |
| `<p>`, `<span>`, `<h1>` | `<Text>` |
| `<button>` | `<TouchableOpacity>` or `<Pressable>` |
| `<input>` | `<TextInput>` |
| `<img>` | `<Image>` |
| `className` | `style` |
| `onClick` | `onPress` |
| `flex-row` | `flexDirection: 'row'` |

---

## Testing Checklist

Once the app loads on your phone, test:

- [ ] Home page displays correctly
- [ ] Bottom navigation works (tap each tab)
- [ ] Tasks page shows tasks
- [ ] Rewards page loads
- [ ] Memories page has timeline/grid toggle
- [ ] Profile page shows settings
- [ ] Buttons respond to taps
- [ ] Modals open and close
- [ ] Scrolling works smoothly

---

## Common Issues & Solutions

### Issue: "Couldn't connect to development server"
**Solution:** Make sure your phone and computer are on the same WiFi network

### Issue: "Module not found"
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: App crashes on startup
**Solution:** Check the terminal for error messages. Usually a syntax error or missing import.

### Issue: QR code not scanning
**Solution:** Use the "Send link with email" option or type the URL manually in Expo Go

---

## Next Steps

### Phase 1: Get It Running (Today)
1. ✅ Set up local environment
2. ✅ Install Expo Go on phone
3. ✅ Run development server
4. ✅ See app on phone

### Phase 2: Build Core Features (This Week)
1. Convert Home page
2. Convert Tasks page
3. Convert Rewards page
4. Convert Memories page
5. Convert Profile page
6. Add bottom navigation

### Phase 3: Polish (Next Week)
1. Add loading states
2. Handle errors gracefully
3. Add animations
4. Test all interactions
5. Fix any bugs

### Phase 4: Build & Test (When Ready)
1. Build APK for testing
2. Share with partner for feedback
3. Iterate based on feedback
4. Prepare for Play Store (later)

---

## Useful Commands

```bash
# Start development server
npm start

# Start with cache cleared
npm start -- --clear

# Run on Android emulator (if you have one)
npm run android

# Check for issues
npx expo-doctor

# Update Expo SDK
npx expo install --fix
```

---

## Pro Tips

💡 **Hot Reload**: Changes appear automatically - no need to restart!  
💡 **Fast Refresh**: Preserves component state while editing  
💡 **Console**: Use `console.log()` - appears in terminal  
💡 **Dev Menu**: Shake phone or press `Cmd+D` (iOS) / `Cmd+M` (Android emulator)  
💡 **Performance**: Use `React.memo()` for expensive components

---

## Getting Help

- **Expo Docs**: https://docs.expo.dev
- **React Native Docs**: https://reactnative.dev
- **Stack Overflow**: Tag questions with `expo` and `react-native`
- **Expo Discord**: https://chat.expo.dev

---

## What I'll Create Next

I'll create these starter files for you:

1. ✅ `package.json` - Already created
2. ⏳ `app.json` - Expo configuration
3. ⏳ `App.tsx` - Simple Home screen to test
4. ⏳ `app/(tabs)/_layout.tsx` - Bottom tab navigation
5. ⏳ `app/(tabs)/index.tsx` - Home page (converted from web)

Once these are in place, you can run `npm start` and see the app on your phone!

---

## Success Criteria

✅ You see the app running on your phone via Expo Go  
✅ You can navigate between tabs  
✅ You can make a small change and see it update  
✅ The UI looks similar to your web app

Let's build this! 🚀
