import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { ISpace } from "../../Interface/space";
import { fetchSpaceData } from "../../Redux/action/action";
import Card from "../shared/common/Card";

const Space = () => {
  const [search, setSearch] = useState<string>("");
  const [spaceXData, setSpaceXData] = useState<ISpace[]>([]);
  const [error, setError] = useState<boolean>(false);

  const dispatch = useDispatch();
  const spaceDataList = useSelector(
    (state: RootStateOrAny) => state?.space?.data
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    if (e.target.value === "") {
      setSpaceXData(spaceDataList);
    }
  };

  const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "success") {
      const filteredLaunchStatus = spaceDataList.filter(
        (fd: ISpace) => fd.launch_success === true
      );
      setSpaceXData(filteredLaunchStatus);
    } else if (e.target.value === "upcoming") {
      const filteredLaunchStatus = spaceDataList.filter(
        (fd: ISpace) => fd.upcoming === true
      );
      setSpaceXData(filteredLaunchStatus);
    } else {
      const filteredLaunchStatus = spaceDataList.filter(
        (fd: ISpace) => fd.launch_success === false
      );
      setSpaceXData(filteredLaunchStatus);
    }
  };

  const handleChangeByDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "year") {
      const filteredByYear = spaceDataList.filter(
        (fd: ISpace) => fd.launch_year === "2020"
      );
      setSpaceXData(filteredByYear);
    } else if (e.target.value === "month") {
      const filteredByMonth = spaceDataList.filter(
        (fd: ISpace) => fd.launch_date_unix === 1638889
      );
      setSpaceXData(filteredByMonth);
    } else if (e.target.value === "week") {
      const filteredByWeek = spaceDataList.filter(
        (fd: ISpace) => fd.launch_date_unix === 167894
      );
      setSpaceXData(filteredByWeek);
    }
  };

  const handleSearch = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (search.toLowerCase() === "falcon") {
      setSpaceXData(spaceDataList);
    } else if (search !== "") {
      const filteredSearchData = spaceDataList?.filter(
        (fl: ISpace) =>
          fl.rocket?.rocket_name.toLowerCase() === search.toLowerCase()
      );
      setSpaceXData(filteredSearchData);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    dispatch(fetchSpaceData());
  }, []);

  useEffect(() => {
    setSpaceXData(spaceDataList);
  }, [spaceDataList]);

  return (
    <>
      <div className="container-fluid d-flex flex-wrap">
        <div className="d-flex filter-lunch">
          <select
            className="form-select align-select"
            aria-label="Default select example"
            onChange={handleChangeStatus}
          >
            <option defaultValue="Filter by Launch status">
              Filter by Launch status
            </option>
            <option value="success">Success</option>
            <option value="failure">Failure</option>
            <option value="upcoming">Upcoming</option>
          </select>

          <select
            className="form-select align-select-text "
            aria-label="Default select example"
            onChange={handleChangeByDate}
          >
            <option defaultValue="Filter by Date">Filter by Date</option>
            <option value="week">By Last week </option>
            <option value="month">By Last month</option>
            <option value="year">By Last year</option>
          </select>
        </div>
        <div className="input-group search-box">
          <div className="search-inner-div">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Rocket name ..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              name="rocket"
              value={search}
              onChange={handleInputChange}
            />
            <div className="input-group-append " onClick={handleSearch}>
              <span className="input-group-text bg-success" id="basic-addon2">
                Search
              </span>
            </div>
          </div>
        </div>
        {spaceXData.length !== 0 ? (
          <Card data={spaceXData} search={search} />
        ) : (
          <p className={`text-align ${error}`}>No Data found ...</p>
        )}
      </div>
    </>
  );
};

export default Space;
