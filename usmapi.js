import axios from "axios";

const USM_API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

// ================================
// SECURITIES
// ================================

export async function getSecurities({
  page = 1,
  pageSize = 50,
  search = "",
  exchange = "",
  assetClass = "",
}) {
  const response = await USM_API.get("/securities", {
    params: {
      page,
      page_size: pageSize,
      search: search || undefined,
      exchange: exchange || undefined,
      asset_class: assetClass || undefined,
    },
  });

  return response.data;
}

export async function getSecurityById(securityId) {
  const response = await USM_API.get(
    `/securities/${securityId}`
  );

  return response.data;
}

export async function getSecurityPrices(securityId) {
  const response = await USM_API.get(
    `/securities/${securityId}/prices`
  );

  return response.data;
}

// ================================
// ASSET CLASSES
// ================================

export async function getAssetClasses() {
  const response = await USM_API.get(
    "/asset-classes"
  );

  return response.data;
}

export async function createAssetClass(data) {
  const response = await USM_API.post(
    "/asset-classes",
    data
  );

  return response.data;
}

export async function updateAssetClass(
  assetClassId,
  data
) {
  const response = await USM_API.put(
    `/asset-classes/${assetClassId}`,
    data
  );

  return response.data;
}

// ================================
// INVESTMENT THEMES
// ================================

export async function getThemes() {
  const response = await USM_API.get(
    "/themes"
  );

  return response.data;
}

export async function createTheme(data) {
  const response = await USM_API.post(
    "/themes",
    data
  );

  return response.data;
}

export async function updateTheme(
  themeId,
  data
) {
  const response = await USM_API.put(
    `/themes/${themeId}`,
    data
  );

  return response.data;
}
