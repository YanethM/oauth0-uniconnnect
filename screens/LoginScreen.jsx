import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGoogleAuth } from '../hooks/useGoogleAuth';

export default function LoginScreen() {
  const { user, error, loading, signIn, signOut } = useGoogleAuth();

  // ── Vista autenticado ──────────────────────────────────────
  if (user) {
    return (
      <SafeAreaView style={styles.container}>
        {user.picture && (
          <Image source={{ uri: user.picture }} style={styles.avatar} />
        )}
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>

        <TouchableOpacity style={styles.logoutBtn} onPress={signOut}>
          <Text style={styles.logoutText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  // ── Vista login ────────────────────────────────────────────
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/icon.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Universidad de Caldas</Text>
      <Text style={styles.subtitle}>
        Inicia sesión con tu cuenta institucional
      </Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {loading ? (
        <ActivityIndicator size="large" color="#004A8F" style={{ marginTop: 24 }} />
      ) : (
        <>
          <TouchableOpacity
            style={styles.googleBtn}
            onPress={signIn}
            disabled={loading}
          >
            <Text style={styles.googleText}>Iniciar sesión con Google</Text>
          </TouchableOpacity>

          <Text style={styles.domain}>Solo cuentas @ucaldas.edu.co</Text>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004A8F',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 32,
    textAlign: 'center',
  },
  googleBtn: {
    marginTop: 16,
    width: 260,
    backgroundColor: '#004A8F',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  googleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  domain: {
    color: '#999',
    fontSize: 12,
    marginTop: 12,
  },
  error: {
    color: '#c0392b',
    backgroundColor: '#fdecea',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    textAlign: 'center',
    width: '100%',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#004A8F',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#004A8F',
    marginBottom: 32,
  },
  logoutBtn: {
    borderWidth: 1.5,
    borderColor: '#004A8F',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  logoutText: {
    color: '#004A8F',
    fontWeight: '600',
    fontSize: 15,
  },
});