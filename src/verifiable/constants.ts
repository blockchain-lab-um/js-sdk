/** Verifiable constants */
export const VerifiableConstants = Object.freeze({
  ERRORS: {
    FiELD_IS_EMPTY: 'fieldPath is empty',
    CONTEXT_TYPE_IS_EMPTY: 'ctxType is empty',
    // ErrStateNotFound issuer state is genesis state.
    IDENTITY_DOES_NOT_EXIST: 'Identity does not exist'
  },
  CREDENTIAL_TYPE: {
    // VerifiableCredential is a W3C verifiable credential type
    W3C_VERIFIABLE_CREDENTIAL: 'VerifiableCredential',
    W3C_VERIFIABLE_PRESENTATION: 'VerifiablePresentation'
  },
  CREDENTIAL_SUBJECT_PATH: 'https://www.w3.org/2018/credentials#credentialSubject',
  JSONLD_SCHEMA: {
    // JSONLDSchemaIden3Credential is a schema for context with Iden3Credential type
    IDEN3_CREDENTIAL: 'https://schema.iden3.io/core/jsonld/iden3proofs.jsonld',
    // JSONLDSchemaW3CCredential2018 is a schema for context with VerifiableCredential type
    W3C_CREDENTIAL_2018: 'https://www.w3.org/2018/credentials/v1'
  },
  // JsonSchema2023 JSON schema for verification of Iden3Credential
  JSON_SCHEMA_VALIDATOR: 'JsonSchema2023',
  SERVICE_TYPE: {
    // Iden3CommServiceType is service type for iden3comm protocol
    IDEN3_COMM: 'iden3-communication',
    // PushNotificationServiceType is service type for delivering push notifications to identity
    PUSH_NOTIFICATION: 'push-notification'
  },
  AUTH: {
    AUTH_BJJ_CREDENTAIL_HASH: '013fd3f623559d850fb5b02ff012d0e2',
    AUTH_BJJ_CREDENTIAL_SCHEMA_JSON_URL: 'https://schema.iden3.io/core/json/auth.json',
    AUTH_BJJ_CREDENTIAL_SCHEMA_JSONLD_URL: 'https://schema.iden3.io/core/jsonld/auth.jsonld',
    AUTH_BJJ_CREDENTIAL_TYPE: 'AuthBJJCredential',
    AUTH_BJJ_CREDENTIAL_SCHEMA_JSON: `{"$schema":"http://json-schema.org/draft-07/schema#","$metadata":{"uris":{"jsonLdContext":"https://schema.iden3.io/core/jsonld/auth.jsonld","jsonSchema":"https://schema.iden3.io/core/json/auth.json"},"serialization":{"indexDataSlotA":"x","indexDataSlotB":"y"}},"type":"object","required":["@context","id","type","issuanceDate","credentialSubject","credentialSchema","credentialStatus","issuer"],"properties":{"@context":{"type":["string","array","object"]},"id":{"type":"string"},"type":{"type":["string","array"],"items":{"type":"string"}},"issuer":{"type":["string","object"],"format":"uri","required":["id"],"properties":{"id":{"type":"string","format":"uri"}}},"issuanceDate":{"type":"string","format":"date-time"},"expirationDate":{"type":"string","format":"date-time"},"credentialSchema":{"type":"object","required":["id","type"],"properties":{"id":{"type":"string","format":"uri"},"type":{"type":"string"}}},"credentialSubject":{"type":"object","required":["x","y"],"properties":{"id":{"title":"Credential Subject ID","type":"string","format":"uri"},"x":{"type":"string"},"y":{"type":"string"}}}}}`
  }
});

/**
 * Proof type for Verifiable Credential supported by sdk
 *
 * @export
 * @enum {number}
 */
export enum ProofType {
  // BJJSignatureProofType
  BJJSignature = 'BJJSignature2021',
  // Iden3SparseMerkleTreeProofType
  Iden3SparseMerkleTreeProof = 'Iden3SparseMerkleTreeProof'
}

/**
 * CredentialStatusType type for revocation type
 *
 * @export
 * @enum {number}
 */
export enum CredentialStatusType {
  // SparseMerkleTreeProof is CredentialStatusType for standard MTP result handlers
  SparseMerkleTreeProof = 'SparseMerkleTreeProof',
  // Iden3ReverseSparseMerkleTreeProof is CredentialStatusType  for reverse iden3 algorithm
  Iden3ReverseSparseMerkleTreeProof = 'Iden3ReverseSparseMerkleTreeProof',
  // Iden3commRevocationStatusV1 is CredentialStatusType for iden3comm revocation status
  Iden3commRevocationStatusV1 = 'Iden3commRevocationStatusV1.0',
  // Iden3OnсhainSparseMerkleTreeProof2023 is a proof type for MTP proofs with iden3 metadata from blockchain
  Iden3OnchainSparseMerkleTreeProof2023 = 'Iden3OnchainSparseMerkleTreeProof2023'
}

/**
 * W3C Proof purpose
 *
 * @export
 * @enum {number}
 */
export enum ProofPurpose {
  Authentication = 'Authentication'
}

/**
 * Merklized Core.Claim root position for vc creation
 *
 * @export
 * @enum {number}
 */
export enum MerklizedRootPosition {
  // PositionIndex merklized root is stored in index.
  Index = 'index',
  // Value merklized root is stored in value.
  Value = 'value',
  // None merklized root is not stored in the claim. By Default.
  None = ''
}

/**
 * Subject Core.Claim position for vc creation
 *
 * @export
 * @enum {number}
 */
export enum SubjectPosition {
  // CredentialSubjectPositionNone is for self issued Iden3Credential
  None = '',
  // Index save subject in index part of claim. By default.
  Index = 'index',
  // Value save subject in value part of claim.
  Value = 'value'
}
