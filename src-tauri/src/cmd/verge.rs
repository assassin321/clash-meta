use super::CmdResult;
use crate::{cmd::StringifyErr as _, config::IMeta, feat};
use clash_verge_draft::SharedDraft;

/// 获取Meta配置
#[tauri::command]
pub async fn get_verge_config() -> CmdResult<SharedDraft<IMeta>> {
    feat::fetch_verge_config().await.stringify_err()
}

/// 修改Meta配置
#[tauri::command]
pub async fn patch_verge_config(payload: IMeta) -> CmdResult {
    feat::patch_verge(&payload, false).await.stringify_err()
}
