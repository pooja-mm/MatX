import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
function Dashboard() {
  return (
    <div className="container mt-4">
      <div className="row w-100">
        <div className="col-lg-3">
          <div class="card">
            <div class="card-body d-flex">
              <p class="card-text m-auto">
                <GroupIcon sx={{ fontSize: "40px" }} />
              </p>
              <div className="content m-auto">
                <h2>1,0256</h2>
                <p>New Members</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card">
            <div class="card-body d-flex">
              <p class="card-text m-auto">
                <LocationOnIcon sx={{ fontSize: "40px" }} />
              </p>
              <div className="content m-auto">
                <h2>1,0256</h2>
                <p>Places added</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card">
            <div class="card-body d-flex">
              <p class="card-text m-auto">
                <KeyboardVoiceIcon sx={{ fontSize: "40px" }} />
              </p>
              <div className="content m-auto">
                <h2>1,0256</h2>
                <p>Support Members</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card">
            <div class="card-body d-flex">
              <p class="card-text m-auto">
                <CardGiftcardIcon sx={{ fontSize: "40px" }} />
              </p>
              <div className="content m-auto">
                <h2>1,0256</h2>
                <p>Tags Used</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
